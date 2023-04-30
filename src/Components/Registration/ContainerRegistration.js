import { connect } from "react-redux";
import { Authorized } from "./Authorized"; 
import { addUser } from "../../Store/Reduser/UserReduser";
import { authUser } from "../../Store/Reduser/UserReduser";
import { entranceEditor } from '../../Store/Reduser/UserReduser';
import { addProductInBascet } from "../../Store/Reduser/InBasketReduser"; 
import { requestFlag } from '../../Store/Reduser/InBasketReduser'

let mapStateToProps = (state) =>{
    return{
        user: state.UserReduser.user,
        authorized: state.UserReduser.authorized,
        editor: state.UserReduser.editor,
        requestGet: state.InBasketReduser.requestGet
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addUser: (user)=>{
            dispatch(addUser(user))
        },
        authUser: () =>{
            dispatch(authUser())
        },
        entranceEditor: (entrance)=>{
            dispatch(entranceEditor(entrance))
        },
        addProductInBascet: (prod)=>{
            dispatch(addProductInBascet(prod))
        },
        requestFlag: (flag)=>{
            dispatch(requestFlag(flag))
        }
    }
}



export const ContainerRegistration = connect(mapStateToProps, mapDispatchToProps)(Authorized)