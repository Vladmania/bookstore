import {putEditorAvatar, 
        requestRegistr, 
        requestEntrance,
        requestEditedData} from "../../Components/Api/ServerRequests"

const SET_USER = "SET_USER";
const AUTH_USER = "AUTH_USER";
const ENTRANCE_EDITOR = "ENTRANCE_EDITOR";

export const initState = {
    user: null,
    authorized: false,
    editor: false,
}

export const UserReduser = (store = initState, action) => {
      switch(action.type){
        case SET_USER:
        return{
            ...store, user: action.user
        } 
        case AUTH_USER:
        return{
            ...store, authorized: true
        } 
        case ENTRANCE_EDITOR:
        return{
            ...store, editor: action.entrance
        } 
           
        default: 
            return store
    }

}

export const addUser = (user) => ({type: SET_USER, user})
export const authUser = () => ({type: AUTH_USER})
export const entranceEditor = (entrance) => ({type: ENTRANCE_EDITOR, entrance})

export const editorAvatar =(data)=>{
    return(dispatch)=>{
        putEditorAvatar(data).then(res => dispatch(addUser(res)))
    }
}

export const requestPostRegistr = (log, pas)=>{
    return(dispatch)=>{
        requestRegistr(log, pas)
        requestEntrance(log, pas).then(res => dispatch(addUser(res)))
    }
}

export const requestPostEntrance = (log, pas)=>{
    return(dispatch)=>{
        requestEntrance(log, pas).then(res => dispatch(addUser(res)))
    }
}

export const requestPutEditedData = (...data)=>{
    return(dispatch)=>{
        requestEditedData(...data)
            .then(res => dispatch(addUser(res)))
            .then(dispatch(entranceEditor(false)))
    }
}

