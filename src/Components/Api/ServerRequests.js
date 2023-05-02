
//Пост запрос добавление в корзну
export const addInBacket = (...data)=>{
   return fetch('http://localhost:5000/api/addinbasket',{
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
    debugger
    return fetch('http://localhost:5000/api/addfeedback',{
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
    return fetch('http://localhost:5000/api/getfeedback/'+ idProd)
      .then((response) => {return response.json()})
  }