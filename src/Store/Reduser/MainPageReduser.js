import {requestProduct} from '../../Components/Api/ServerRequests'
const SET_PRODUCTS = "SET_PRODUCTS"

export const initState = {
    products: []
}

export const MainPageReduser = (store = initState, action) => {
      switch(action.type){
        case SET_PRODUCTS:
        return{
            ...store, products: [...action.products]
        }
      
        default: 
            return store
    }

}

export const setProduct = (products) => ({type: SET_PRODUCTS, products})

export const requestGetProduct = ()=>{
    return(dispatch)=>{
        requestProduct().then(res => dispatch(setProduct(res)))
    }
}
