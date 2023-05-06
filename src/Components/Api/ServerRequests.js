import axios from 'axios'

const url = 'http://localhost:5000/api/'

//Запрос товаров
export const requestProduct = ()=>{
   return fetch(url + 'prod')
        .then((response) => {return response.json()})
}

//Пост запрос добавление в корзну
export const addInBacket = (...data)=>{
    return fetch(url + 'addinbasket',{
         method: "POST",
         headers: {
             'Content-Type': 'application/json;charset=utf-8'
         }, 
         body: JSON.stringify({idUser: data[0], name: data[1], price: data[2],quantity: data[3],img: data[4], idProd: data[5]})
     })
     .then((response) => {return response.json()})
 }

 //Добавление отзыва
 export const addReviews = (idProd, name, avatar, feedback)=>{
    return fetch(url + 'addfeedback',{
          method: "POST",
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          }, 
          body: JSON.stringify({idProd, name, avatar, feedback})
      })
      .then((response) => {return response.json()})
  }

  //Получить отзывы
  export const getReviews = (idProd)=>{
    return fetch(url + 'getfeedback/'+ idProd)
      .then((response) => {return response.json()})
  }

  //Изменения количества товаров
  export const editorBasket = (quantity, id) =>{
   return fetch(url + 'editorbasket',{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }, 
        body: JSON.stringify({quantity: quantity, id: id})
    }).then((response) => {return response.json()})
  }

  //Редактирование аватарки
export const putEditorAvatar = (data)=>{
     return axios.put(url + 'editoruseravatar', data, {
         headers: {
             'Content-Type': 'multipart/form-data'
         }
     }).then(res => {return res.data})
}

//Удаление элементов из корзины
export const deleteProductFromBasket = (id) =>{
    return fetch(url + 'deletebasket/' + id,{
        method: "DELETE",
       }).then((response) =>  response.text())
}

//Регистрация
export const requestRegistr = (log, pas) =>{
   return fetch(url + 'registration',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({login: log, password: pas})
    })
    .then((response) => {return response.json()})            
}
//Вход в аккаунт
export const requestEntrance = (log, pas)=>{
   return fetch(url + 'user',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
  },
         body: JSON.stringify({login: log, password: pas})
}).then((response) => {return response.json()}) 
}
//Редактирование данных
export const requestEditedData = (...data) =>{
   return fetch(url + 'editoruser',{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({fio: data[0], birthDate: data[1], email: data[2], tel: Number(data[3]), gender: data[4], id: data[5]})})
            .then((response) => {return response.json()})
}
//Получить корзину пользователя
export const getUserCart = (id)=>{
    return fetch(url + 'basket?idUser=' + id)
            .then((response) => {return response.json()})
}