import { Registration } from "./Registration"
import { Account } from "../Account/Account"


export const Authorized = (props) =>{
    
        if(props.authorized){
            props.requestGetUserCart(props.user.id)
        }

    if(props.user !== null){
        props.authUser()
    }

    return(
        <>{props.authorized === false 
            ? <Registration requestPostRegistr={props.requestPostRegistr} 
                            requestPostEntrance={props.requestPostEntrance} 
                            addUser={props.addUser} 
                            authUser={props.authUser} /> 
        :<Account data={props.user} 
                editor={props.editor} 
                entranceEditor={props.entranceEditor} 
                requestPutEditedData={props.requestPutEditedData}
                editorAvatar={props.editorAvatar}
                />} </>
          
         
        
    )
}