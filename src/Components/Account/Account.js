import { useState } from 'react'
import {StyleAccount} from './StyleAccount'



export const Account = (props) =>{
    const [fio, setFio] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [gender, setGender] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState(null)

    const formData = new FormData()
    formData.append("avatar", avatar)

   debugger
    return(
        <StyleAccount>
            <div className='account_user'>
                <img src=""></img>
                <h3>{props.data.fio ? props.data.fio : props.data.login}</h3> 

                <input  type='file' 
                        onChange={e => setAvatar(e.target.files[0])}
                        accept='image/*'/>
                 <button onClick={()=>props.editedAvatar(formData)}>заменить</button>
             </div>
            <div className='account_user_accounting'>
                    <h3>Учетные данные</h3>
                <div className='account_user_data'>
                    <div>
                        <span>
                            <p className='account_user_data_header'>ФИО</p>
                                {props.editor ? <input onChange={e => setFio(e.target.value)}/> :
                                <p className='account_user_data_header_data'>{props.data.fio === "" ?  <div></div> : props.data.fio}</p>}
                        </span>
                            <span>
                                    <p className='account_user_data_header'>Дата рождения</p>
                                {props.editor ? <input type='date' onChange={e => setBirthDate(e.target.value)}/> :
                                <p className='account_user_data_header_data'>{props.data.birthdate}</p>}
                            </span>
                                <span>
                                    <p className='account_user_data_header'>Пол</p>
                                        {props.editor ? <input onChange={e => setGender(e.target.value)}/> :
                                        <p className='account_user_data_header_data'>{props.data.gender}</p>}
                                </span>
                    </div>
                        <div>
                            <span>
                                <p className='account_user_data_header'>Телефон</p>
                                {props.editor ? <input type="number" onChange={e => setTel(e.target.value)}/> :
                                <p className='account_user_data_header_data'>{props.data.tel}</p>}
                            </span>
                                <span>
                                    <p className='account_user_data_header'>Почта</p>
                                    {props.editor ? <input type="email" onChange={e => setEmail(e.target.value)}/> :
                                    <p className='account_user_data_header_data'>{props.data.email}</p>}
                                </span>
                        </div>
                    </div>
                    {props.editor ?<div className='account_user_editor_button'>
                        <div className='account_user_editor' onClick={()=> props.editedData(fio, birthDate, email, tel, gender, props.data.id)}>Сохранить</div>
                        <div className='account_user_editor' 
                            onClick={()=> props.entranceEditor(false)}>Отмена</div>
                    </div> : null}
                </div>
            <div>
                <div className='account_user_editor' 
                     onClick={()=> props.entranceEditor(true)}>Редактировать данные</div>
            </div>
        </StyleAccount>
    )
}