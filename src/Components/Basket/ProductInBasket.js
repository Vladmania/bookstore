import { StyleProductInBasket } from "./StyleProductInBasket"

export const ProductInBasket = (props) =>{
    return(
        <StyleProductInBasket>
            <div className="product_in_basket" key={props.product.id}>
                <img src={props.product.img}/>
                <div>
                    <p>{props.product.name}</p>
                    <button className="product_in_basket_delete" 
                             onClick={()=> props.deleteProductFromBasket(props.product.id)}>
                                удалить</button>
                </div>
            </div>
                <div className="product_in_basket_prise">
                    <p>{props.product.price}</p>
                </div>
                    <div className="product_in_basket_quantity">
                        <p onClick={()=> props.product.quantity > 1 ?
                            props.putEditorDecreaseBasket( props.product.quantity - 1 ,props.product.id) : null}>-</p>
                        <input type="number" value={props.product.quantity}/>
                        <p onClick={()=>
                             props.putEditorIncreaseBasket(props.product.quantity + 1 ,props.product.id)}>+</p>
                    </div>
                        <div className="product_in_basket_sum">
                            <p>{props.product.price * props.product.quantity}</p>
                        </div>
            </StyleProductInBasket>
    )
}