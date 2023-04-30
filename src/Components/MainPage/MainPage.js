import { CardProduct } from "../Card Product/CardProduct"
import {StyleMainPage} from "./StyleMainPage"


export const MainPage = (props) =>{
debugger
    if(props.products.length === 0){
        fetch('http://localhost:5000/api/prod')
        .then((response) => {return response.json()})
        .then(res => props.setProduct(res))
    }
    
    
    const addInBacket = (...data)=>{
       fetch('http://localhost:5000/api/addinbasket',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({idUser: data[0], name: data[1], price: data[2],quantity: data[3],img: data[4]})
        })
        .then((response) => {return response.json()}) 
        .then(res => props.addProductInBascet(res)) 
    }

     
    
    const Product = props.products
    .map(e => <CardProduct id={e.id} name={e.name} img={e.img} description={e.description}
                            price={e.price} product={{...e}} idUser={props.user} addInBacket={addInBacket} 
                            authorized={props.authorized} addProductInBascet={props.addProductInBascet}
                            addProductInBascetUser={props.addProductInBascetUser}/>)

    return(
    <StyleMainPage>
        {Product}
    </StyleMainPage>
    )
}