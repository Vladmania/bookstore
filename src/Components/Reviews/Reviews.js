import { useParams } from 'react-router-dom';
import { Review } from "./Review"

export const Reviews = (props) =>{
    const param = useParams()
    props.getReviews(param.productId)
    const addProductReview = props.products.map(e => e.id === Number(param.productId) ? <Review products={{...e}} 
                                                                                                user={{...props.user}} 
                                                                                                authorized={props.authorized} 
                                                                                                postaddInBacket={props.postaddInBacket}
                                                                                                addProductInBascetUser={props.addProductInBascetUser}
                                                                                                postaddReviews={props.postaddReviews}
                                                                                                reviews={props.reviews}/> : null)


    return(
       <>{addProductReview}</>
    )
}