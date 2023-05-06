import { StyleBasket } from "./StyleBasket"
import { ProductInBasket } from "./ProductInBasket"

export const Basket = (props) =>{

    const inBaskets = props.basket.map(e => <ProductInBasket product={{...e}}
        deleteProductFromBasket={props.deleteProductBasket} decreaseQuantity={props.decreaseQuantity}
        increaseQuantity={props.increaseQuantity} putEditorIncreaseBasket={props.putEditorIncreaseBasket}
        putEditorDecreaseBasket={props.putEditorDecreaseBasket}/>)
        
        const totalCost = props.basket.map(e => e.price * e.quantity)
        const sum = props.basket.length !== 0 ? totalCost.reduce((a,b) => a + b) : 0

    return(
        <StyleBasket>
            <h1>Корзина</h1>
            <div className="basket_parameter">
                <p>Товар</p>
                <p>Цена</p>
                <p>Количество</p>
                <p>Сумма</p>
            </div>
            {inBaskets}
            <div>
                <p>Общая стоймость: {sum}</p>
                <div className="basket_button">Оформить покупку</div>
            </div>

        </StyleBasket>
    )
}

