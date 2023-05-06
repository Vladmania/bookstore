import { useState } from "react"
import { StyleRegistration } from "./StuleRegistration"

export const Registration = (props) =>{
    const[login, setLogin] = useState("")
    const[password, setPassword] = useState("")

    return(
            <StyleRegistration>
                <h1>Регистрация</h1>
                <div className="registration">
                    <p>Login</p>
                    <input value={login}
                    onChange={e => setLogin(e.target.value)}/>
                    <p>Password</p>
                    <input value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"/>
                    <div>
                        <div className="registration_button" onClick={()=> props.requestPostRegistr(login, password)}>Зарегестрироватся</div>
                        <div className="registration_button" onClick={()=> props.requestPostEntrance(login, password)}>Войти</div>
                    </div>
                </div>
            </StyleRegistration>
        
    )
}