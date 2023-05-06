import { CardProduct } from "../Card Product/CardProduct"
import {StyleMainPage} from "./StyleMainPage"


export const MainPage = (props) =>{
    if(props.products.length === 0){
        props.requestGetProduct()
    }
   
    const Product = props.products
    .map(e => <CardProduct id={e.id} name={e.name} img={e.img} description={e.description}
                            price={e.price} product={{...e}} idUser={props.user} 
                            postaddInBacket={props.postaddInBacket} 
                            authorized={props.authorized} 
                            addProductInBascet={props.addProductInBascet}
                            addProductInBascetUser={props.addProductInBascetUser} 
                            basket={props.basket}/>)

    return(
    <StyleMainPage>
        {Product}
    </StyleMainPage>
    )
}