import { connect } from "react-redux";
import { PagesProducts } from "./PagesProducts";
import { addProductInBascet, postaddInBacket, addProductInBascetUser } from "../../Store/Reduser/InBasketReduser"


let mapStateToProps = (state) =>{
    return{
        products: state.MainPageReduser.products,
        user: state.UserReduser.user,
        authorized: state.UserReduser.authorized,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addProductInBascet: (prod)=>{
            dispatch(addProductInBascet(prod))
        },
        postaddInBacket: (...prod) =>{
            dispatch(postaddInBacket(...prod))
        },
        addProductInBascetUser: (product)=>{
            dispatch(addProductInBascetUser(product))
        },
    }
}



export const ContainerPageProduct = connect(mapStateToProps, mapDispatchToProps)(PagesProducts)