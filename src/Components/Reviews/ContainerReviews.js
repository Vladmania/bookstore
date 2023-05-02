import { connect } from "react-redux";
import { Reviews } from "./Reviews";
import { addProductInBascet, 
         addProductInBascetUser,
         postaddInBacket } from "../../Store/Reduser/InBasketReduser";
import {postaddReviews, getFeedback} from "../../Store/Reduser/ReviewsReduser"        

let mapStateToProps = (state) =>{
    return{
        products: state.MainPageReduser.products,
        user: state.UserReduser.user,
        authorized: state.UserReduser.authorized,
        reviews: state.ReviewsReduser.reviews
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addProductInBascet: (prod)=>{
            dispatch(addProductInBascet(prod))
        },
        addProductInBascetUser: (product)=>{
            dispatch(addProductInBascetUser(product))
        },
        postaddInBacket: (...prod) =>{
            dispatch(postaddInBacket(...prod))
        },
        postaddReviews: (idProd, name, avatar, feedback)=>{
            dispatch(postaddReviews(idProd, name, avatar, feedback))
        },
        getReviews: (idProd)=>{
            dispatch(getFeedback(idProd))
        },
    }
}



export const ContainerReviews = connect(mapStateToProps, mapDispatchToProps)(Reviews)