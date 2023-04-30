const ADD_PRODUCT = "ADD_PRODUCT"
const DELETE_PRODUCT = "DELETE_PRODUCT"
const ADD_PRODUCT_USER = "ADD_PRODUCT_USER"
const REQUEST_SERVER = "REQUEST_SERVER"

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
            newProducts.ProductsInBasket.push(...action.product)
           return newProducts }
           
           case DELETE_PRODUCT: {
            return{
                ...store, ProductsInBasket: store.ProductsInBasket.filter(id => id.id !== action.productId)
            }}
            case REQUEST_SERVER: 
                return{
                    ...store, requestGet: action.flag
                }
            
        default: 
            return store
    }

}

export const addProductInBascet = (product) => ({type: ADD_PRODUCT, product})
export const addProductInBascetUser = (product) => ({type: ADD_PRODUCT_USER, product})
export const deleteProduct = (productId) => ({type: DELETE_PRODUCT, productId})
export const requestFlag = (flag) => ({type: REQUEST_SERVER, flag})