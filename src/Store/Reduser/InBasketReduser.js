import {addInBacket, 
        editorBasket, 
        deleteProductFromBasket,
        getUserCart} from "../../Components/Api/ServerRequests"

const ADD_PRODUCT = "ADD_PRODUCT"
const DELETE_PRODUCT = "DELETE_PRODUCT"
const ADD_PRODUCT_USER = "ADD_PRODUCT_USER"
const REQUEST_SERVER = "REQUEST_SERVER"
const INCREASE_QUANTITY = "INCREASE_QUANTITY"
const DECREASE_QUANTITY = "DECREASE_QUANTITY"

export const initState = {
    ProductsInBasket: [],
    requestGet: true,
}

export const InBasketReduser = (store = initState, action) => {
    debugger
      switch(action.type){
        case ADD_PRODUCT: 
        return{
            ...store, ProductsInBasket: [...action.product]
           }
           case ADD_PRODUCT_USER: {
            let newProducts = {...store}
            newProducts.ProductsInBasket = [...store.ProductsInBasket]
            newProducts.ProductsInBasket.push(action.product)
           return newProducts }
           
           case DELETE_PRODUCT: {
            return{
                ...store, ProductsInBasket: store.ProductsInBasket.filter(id => id.id !== action.productId)
            }}
            case REQUEST_SERVER: 
                return{
                    ...store, requestGet: action.flag
                }
                case INCREASE_QUANTITY: 
                return{
                    ...store, ProductsInBasket: store.ProductsInBasket.map(prod => {
                       if(prod.id === action.id){
                        return {...prod , quantity: prod.quantity + 1}
                       }
                       return prod
                    } )
                }
                case DECREASE_QUANTITY: 
                return{
                    ...store, ProductsInBasket: store.ProductsInBasket.map(prod => {
                       if(prod.id === action.id){
                        return {...prod , quantity: prod.quantity - 1}
                       }
                       return prod
                    } )
                }
            
        default: 
            return store
    }

}

export const addProductInBascet = (product) => ({type: ADD_PRODUCT, product})
export const addProductInBascetUser = (product) => ({type: ADD_PRODUCT_USER, product})
export const deleteProduct = (productId) => ({type: DELETE_PRODUCT, productId})
export const requestFlag = (flag) => ({type: REQUEST_SERVER, flag})
export const increaseQuantity = (id) => ({type: INCREASE_QUANTITY, id})
export const decreaseQuantity = (id) => ({type: DECREASE_QUANTITY, id})


export const postaddInBacket = (...data) =>{
    return(dispatch) =>{
        addInBacket(...data).then(res => dispatch(addProductInBascet(res)))
    }
}

export const putEditorIncreaseBasket = (quantity, id)=>{
    return(dispatch) =>{
        editorBasket(quantity, id)
            .then(res => dispatch(addProductInBascet(res)))
            .then(dispatch(increaseQuantity(id)))
    }
}

export const putEditorDecreaseBasket = (quantity, id)=>{
    return(dispatch) =>{
        editorBasket(quantity, id)
            .then(res => dispatch(addProductInBascet(res)))
            .then(dispatch(decreaseQuantity(id)))
    }
}

export const deleteProductBasket = (id)=>{
    return(dispatch)=>{
        deleteProductFromBasket(id).then(dispatch(deleteProduct(id)))
    }
}

export const requestGetUserCart = (id)=>{
    return(dispatch)=>{
        getUserCart(id).then(res => dispatch(addProductInBascet(res)))
    }
}