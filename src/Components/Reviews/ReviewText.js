import { StyleReview } from "./StyleReview"


export const ReviewText = (props) =>{
    debugger
    return(
       <StyleReview>
            <div className="review_avatar_in_nickname">
                <img src={props.value.avatar ? "http://localhost:5000/" + props.value.avatar 
                    :"https://img.icons8.com/ios/256/user-male-circle.png"}/>
                <p>{props.value.name}</p>
            </div>
                <div className="review">
                    <p className="review_text">{props.value.feedback}</p>
                </div>
       </StyleReview>
    )
}