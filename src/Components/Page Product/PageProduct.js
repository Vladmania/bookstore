import { StylePageProduct } from "./StylePageProduct";
import { Link } from "react-router-dom";

export const PageProduct = (props) =>{
debugger
            return(
                <><StylePageProduct>
                    <div className="page_product_name">
                        <h2>{props.product.name}</h2>
                            <Link to ={"/review/" + props.product.id} className="cardproduct_comment">   
                                <img src="https://img.icons8.com/external-sbts2018-outline-sbts2018/256/external-sms-ecommerce-basic-1-sbts2018-outline-sbts2018.png" />
                                <p>отзывы</p>
                            </Link>
                    </div>
                    <div className="page_product_info">
                        <img src={props.product.img}/>
                        <div className="page_product_description">
                            <h2>О книге</h2>
                            <p>{props.product.description}</p>
                        </div>
                        <div className="page_product_price">
                            <p>{props.product.price}₽</p>
                            <div onClick={()=> props.postaddInBacket(props.idUser, props.product.name, props.product.price, 1 , props.product.img, props.product.id)}>Добавить в корзину</div>
                        </div>
                    </div>
        
                </StylePageProduct></>
            )
        }