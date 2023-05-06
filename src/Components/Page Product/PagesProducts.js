import { PageProduct } from "./PageProduct"
import { useParams } from 'react-router-dom';

export const PagesProducts = (props) =>{

    const param = useParams()
    
    const addproduct = props.products.map(e => e.id === Number(param.productId) ? 
    <PageProduct product={{...e}} idUser={props.user ? props.user.id : null} 
                 postaddInBacket={props.postaddInBacket} 
                 addProductInBascet={props.addProductInBascet}
                 addProductInBascetUser={props.addProductInBascetUser}/> : null)
           
        
    return(
        <>{addproduct}</>
    )
}