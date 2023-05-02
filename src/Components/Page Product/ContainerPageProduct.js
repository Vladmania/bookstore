import { connect } from "react-redux";
import { PagesProducts } from "./PagesProducts";
import { addProductInBascet, postaddInBacket } from "../../Store/Reduser/InBasketReduser"


let mapStateToProps = (state) =>{
    return{
        products: state.MainPageReduser.products,
        user: state.UserReduser.user,
        
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addProductInBascet: (prod)=>{
            dispatch(addProductInBascet(prod))
        },
        postaddInBacket: (...prod) =>{
            dispatch(postaddInBacket(...prod))
        }
    }
}



export const ContainerPageProduct = connect(mapStateToProps, mapDispatchToProps)(PagesProducts)