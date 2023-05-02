import { useState } from "react"
import { ReviewText } from "./ReviewText"
import { StyleReviews } from "./StyleReviews"

export const Review = (props) =>{
    const [feedback, setFeedback] = useState("")
debugger
     const addReviewText = props.reviews.map(e => <ReviewText value={{...e}} />)
    return(
        <StyleReviews>
        <div className="reviews_cover">
            <div className="reviews_cover_product">
                <div className="reviews_cover_img"><img src={props.products.img} /></div>
                <div className="reviews_cover_name">{props.products.name}</div>
            </div>
                <div>
                    {props.authorized ? <div className="reviews_cover_button" 
                    onClick={()=>props.postaddInBacket(props.user.id, 
                        props.products.name, 
                        props.products.price, 
                        1 ,
                        props.products.img, 
                        props.products.id)}>Добавить в корзину<br/>{props.products.price}</div>
                    : <div className="reviews_cover_button" onClick={() => props.addProductInBascetUser(props.products)}>Добавить в корзину<br/>{props.products.price}</div>}
                </div>
        </div>
        <h1>Отзывы</h1>
        <div className="reviews_add">
            {props.authorized ? <><input className="reviews_add_input" onChange={e => setFeedback(e.target.value)} /><span className="reviews_add_input_button" onClick={() => props.postaddReviews(props.products.id, props.user.fio, props.user.avatar, feedback)}>
                    <img src="https://img.icons8.com/ios/256/add.png" />
                </span></> : null}
            
        </div>
       {addReviewText}
       </StyleReviews>
    )
}