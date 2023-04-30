import {StyleCardProduct} from "./StyleCardProduct"
import { Link } from "react-router-dom"

export const CardProduct = (props) =>{
    return(
    <StyleCardProduct key={props.id}>
        <div className="cardproduct_img">
            <Link to= {'product/' + props.id}>
                <img src={props.img}/>
            </Link>
        </div>
            <div className="cardproduct_info">
                <p className="cardproduct_price">{props.price}₽</p>
                <p className="cardproduct_name"><a href={"/product"}>{props.name}</a></p>
                    <Link to={"/review/" + props.id} className="cardproduct_comment">   
                        <img src="https://img.icons8.com/external-sbts2018-outline-sbts2018/256/external-sms-ecommerce-basic-1-sbts2018-outline-sbts2018.png" />
                        <p>отзывы</p>
                    </Link>
                    {
                        props.authorized ? <div className="cardproduct_button" onClick={()=>props.addInBacket(props.idUser.id, props.name,props.price,1,props.img)}>В корзину</div>
                        : <div className="cardproduct_button" onClick={()=>props.addProductInBascetUser(props.product)}>В корзину</div>
                    }
                
            </div>
    </StyleCardProduct>
    )
}