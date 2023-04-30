import { connect } from "react-redux";
import { PagesProducts } from "./PagesProducts";
import { addProductInBascet } from "../../Store/Reduser/InBasketReduser"


let mapStateToProps = (state) =>{
    return{
        products: state.MainPageReduser.products,
        
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addProductInBascet: (prod)=>{
            dispatch(addProductInBascet(prod))
        }
    }
}



export const ContainerPageProduct = connect(mapStateToProps, mapDispatchToProps)(PagesProducts)