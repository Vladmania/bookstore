import { StyleHeader } from "./StyleHeader"
import { Img } from "./StyleHeader"
import { Link } from "react-router-dom"

export const Header = (props) =>{
    return(
        <StyleHeader>
            <Link to="/" className="header_logo">BookStore</Link>
                <div className="header_poisk">
                    <input />
                    <span><img src="https://img.icons8.com/ios-filled/256/search--v1.png" alt=""></img></span>
                </div>
                    <div className="header_link">
                    <Link to = {"/account"}><Img src="https://img.icons8.com/ios/256/user--v1.png" alt=""></Img>Акаунт</Link>
                        <Link to = {"/basket"}>
                            <div className="header_leangth_basket">{props.basket.length}</div>
                            <Img src="https://img.icons8.com/ios/256/shopping-basket-2.png" alt=""></Img>
                            Корзина
                        </Link>
                    
                    </div>
        </StyleHeader>
    )
}