import { StyleProductInBasket } from "./StyleProductInBasket"

export const ProductInBasket = (props) =>{

    return(
        <StyleProductInBasket>
            <div className="product_in_basket" key={props.id}>
                <img src={props.img}/>
                <div>
                    <p>{props.name}</p>
                    <button className="product_in_basket_delete" 
                             onClick={()=> props.deleteProductFromBasket(props.id)}>удалить</button>
                </div>
            </div>
                <div className="product_in_basket_prise">
                    <p>{props.price}</p>
                </div>
                    <div className="product_in_basket_quantity">
                        <p>+</p>
                        <input />
                        <p>-</p>
                    </div>
                        <div className="product_in_basket_sum">
                            <p>499</p>
                        </div>
            </StyleProductInBasket>
    )
}