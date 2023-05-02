import { addReviews, getReviews } from "../../Components/Api/ServerRequests"

const SET_REVIEWS = "SET_REVIEWS"

export const initState = {
    reviews: []
}

export const ReviewsReduser = (store = initState, action) => {
      switch(action.type){
        case SET_REVIEWS:
        return{
            ...store, reviews: [...action.reviews]
        }
      
        default: 
            return store
    }

}

export const setReviews = (reviews) => ({type: SET_REVIEWS, reviews})

export const postaddReviews = (idProd, name, avatar, feedback) =>{
    return(dispatch) =>{
        addReviews(idProd, name, avatar, feedback).then(res => dispatch(setReviews(res)))
    }
}

export const getFeedback = (idProd) =>{
    return(dispatch) =>{
        getReviews(idProd).then(res => dispatch(setReviews(res)))
    }
}