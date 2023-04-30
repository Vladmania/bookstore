import { ReviewText } from "./ReviewText"
import { StyleReviews } from "./StyleReviews"

export const Review = (props) =>{

    const addReviewText = props.product.review.map(e => <ReviewText value={{...e}} />)
    return(
        <StyleReviews>
        <div className="reviews_cover">
            <div className="reviews_cover_product">
                <div className="reviews_cover_img"><img src={props.product.img} /></div>
                <div className="reviews_cover_name">{props.product.name}</div>
            </div>
                <div>
                    <div className="reviews_cover_button" onClick={()=>props.addProductInBascet(props.product)}>Добавить в корзину<br/>{props.product.price}</div>
                </div>
        </div>
        <h1>Отзывы</h1>
        <div className="reviews_add">
            <input className="reviews_add_input"/>
            <span className="reviews_add_input_button"><img src="https://img.icons8.com/windows/256/add-camera.png" /></span>
            <span className="reviews_add_input_button"><img src="https://img.icons8.com/ios/256/add.png" /></span>
        </div>
       {addReviewText}
       </StyleReviews>
    )
}