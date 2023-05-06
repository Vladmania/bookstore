import { connect } from "react-redux";
import { Basket } from "./Basket"; 
import { deleteProduct } from "../../Store/Reduser/InBasketReduser";
import { addProductInBascet } from "../../Store/Reduser/InBasketReduser"; 
import { requestFlag, increaseQuantity, 
    decreaseQuantity, putEditorIncreaseBasket,
    putEditorDecreaseBasket, deleteProductBasket } from '../../Store/Reduser/InBasketReduser'

let mapStateToProps = (state) =>{
    return{
        basket: state.InBasketReduser.ProductsInBasket,
        user: state.UserReduser.user,
        authorized: state.UserReduser.authorized,
        request: state.UserReduser.request
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        deleteProduct: (id)=>{
            dispatch(deleteProduct(id))
        },
        addProductInBascet: (prod)=>{
            dispatch(addProductInBascet(prod))
        },
        requestFlag: (flag)=>{
            dispatch(requestFlag(flag))
        },
        increaseQuantity: (id)=>{
            dispatch(increaseQuantity(id))
        },
        decreaseQuantity: (id)=>{
            dispatch(decreaseQuantity(id))
        },
        putEditorIncreaseBasket: (quantity, id)=>{
            dispatch(putEditorIncreaseBasket(quantity, id))
        },
        putEditorDecreaseBasket: (quantity, id)=>{
            dispatch(putEditorDecreaseBasket(quantity, id))
        },
        deleteProductBasket: (id)=>{
            dispatch(deleteProductBasket(id))
        }
    }
}



export const ContainerBasket = connect(mapStateToProps, mapDispatchToProps)(Basket)