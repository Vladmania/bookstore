import { StyleBasket } from "./StyleBasket"
import { ProductInBasket } from "./ProductInBasket"

export const Basket = (props) =>{
    const deleteProductFromBasket = (id) =>{
        fetch('http://localhost:5000/api/deletebasket/' + id,{
            method: "DELETE",
           }).then((response) =>  response.text())
             .then(props.deleteProduct(id))
    }

    const inBaskets = props.basket.map(e => <ProductInBasket id={e.id} name={e.name} 
        price={e.price} description={e.description} img={e.img} quantity={e.quantity}
        deleteProductFromBasket={deleteProductFromBasket}/>)
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
                <p>Общая стоймость:</p>
                <div className="basket_button">Оформить покупку</div>
            </div>

        </StyleBasket>
    )
}

