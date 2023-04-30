import { useParams } from 'react-router-dom';
import { Review } from "./Review"

export const Reviews = (props) =>{
    const param = useParams()

    const addProductReview = props.products.map(e => e.id === Number(param.productId) ? <Review product={{...e}} addProductInBascet={props.addProductInBascet}/> : null)


    return(
       <>{addProductReview}</>
    )
}