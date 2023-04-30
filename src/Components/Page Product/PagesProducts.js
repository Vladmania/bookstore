import { PageProduct } from "./PageProduct"
import { useParams } from 'react-router-dom';

export const PagesProducts = (props) =>{

    const param = useParams()
    
         const addproduct = props.products.map(e => e.id === Number(param.productId) ? <PageProduct product={{...e}} name ={e.name} img ={e.img}
            description = {e.description} price={e.price} addProductInBascet={props.addProductInBascet}/> : null)
           
        
    return(
        <>{addproduct}</>
    )
}