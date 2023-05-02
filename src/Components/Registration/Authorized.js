import { Registration } from "./Registration"
import { Account } from "../Account/Account"


export const Authorized = (props) =>{

    //Функция регистрации и после регистрации вход
    const registry = (log, pas) =>{
        fetch('http://localhost:3000/api/registration',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify({login: log, password: pas})
        })
        .then((response) => {return response.json()}) 
            
              fetch('http://localhost:3000/api/user',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
          },
                 body: JSON.stringify({login: log, password: pas})
    }).then((response) => {return response.json()})
      .then( res => props.addUser(res))           
    }

    //Функция входа в аккаунт
    const entrance = async (log, pas) =>{
        await fetch('http://localhost:5000/api/user',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
      },
             body: JSON.stringify({login: log, password: pas})
        }).then((response) => {return response.json()})
        .then( res => props.addUser(res)) 
        
            }

        if(props.authorized){
            fetch('http://localhost:5000/api/basket?idUser=' + props.user.id)
            .then((response) => {return response.json()})
            .then(res => props.addProductInBascet(res))
        }

            //Рудактированние данных
            const editedData = (...data) =>{
                fetch('http://localhost:5000/api/editoruser',{
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({fio: data[0], birthDate: data[1], email: data[2], tel: Number(data[3]), gender: data[4], id: data[5]})})
                        .then((response) => {return response.json()})
                        .then( res => props.addUser(res))
                        props.entranceEditor(false)
            }

            

    if(props.user !== null){
        props.authUser()
    }

    return(
        <>{props.authorized === false 
            ? <Registration registry={registry} 
                            entrance={entrance} 
                            addUser={props.addUser} 
                            authUser={props.authUser} /> 
        :<Account data={props.user} 
                editor={props.editor} 
                entranceEditor={props.entranceEditor} 
                editedData={editedData}
                />} </>
          
         
        
    )
}