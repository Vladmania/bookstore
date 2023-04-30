import { StyleReview } from "./StyleReview"


export const ReviewText = (props) =>{
    debugger
    return(
       <StyleReview>
            <div className="review_avatar_in_nickname">
                <img src="https://img.icons8.com/ios/256/user-male-circle.png"/>
                <p>{props.value.whoLeft.nickname}</p>
            </div>
                <div className="review">
                    <p className="review_text">{props.value.text}</p>
                    <div className="review_foto_collection">
                            <div className="review_foto">
                                <img src="https://ir.ozone.ru/s3/rp-photo-2/wc500/b80d79a7-8bd9-4571-9ddf-04c9f8d79fbf.jpeg"></img>
                            </div>
                            <div className="review_foto">
                                <img src="https://ir.ozone.ru/s3/rp-photo-1/wc500/e50a5149-90e8-466b-8aec-a714e8c56d81.jpeg"></img>
                            </div>
                            <div className="review_foto">
                                <img src="https://ir.ozone.ru/s3/rp-photo-1/wc500/5bfb8e54-5ffa-4497-af9c-17094548ffa6.jpeg"></img>
                            </div>
                        </div>
                </div>
       </StyleReview>
    )
}