import { connect } from "react-redux";
import { Reviews } from "./Reviews";
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



export const ContainerReviews = connect(mapStateToProps, mapDispatchToProps)(Reviews)