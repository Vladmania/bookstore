import { connect } from "react-redux";
import { Header } from "./Header"; 

let mapStateToProps = (state) =>{
    return{
        basket: state.InBasketReduser.ProductsInBasket
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        
    }
}



export const ContainerHeader = connect(mapStateToProps, mapDispatchToProps)(Header)