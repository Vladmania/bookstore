import { connect } from "react-redux";
import { MainPage } from "./MainPage";
import { addProductInBascet } from "../../Store/Reduser/InBasketReduser"; 
import { setProduct } from "../../Store/Reduser/MainPageReduser";
import { addProductInBascetUser, postaddInBacket, requestFlag } from '../../Store/Reduser/InBasketReduser'


let mapStateToProps = (state) =>{
    return{
        products: state.MainPageReduser.products,
        user: state.UserReduser.user,
        authorized: state.UserReduser.authorized,
        requestGet: state.InBasketReduser.requestGet,
        basket: state.InBasketReduser.ProductsInBasket,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addProductInBascet: (prod)=>{
            dispatch(addProductInBascet(prod))
        },
        setProduct: (products)=>{
            dispatch(setProduct(products))
        },
        addProductInBascetUser: (product)=>{
            dispatch(addProductInBascetUser(product))
        },
        requestFlag: (flag)=>{
            dispatch(requestFlag(flag))
        },
        postaddInBacket: (...prod) =>{
            dispatch(postaddInBacket(...prod))
        }
    }
}



export const ContainerMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage)