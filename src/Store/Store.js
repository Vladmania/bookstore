import { configureStore } from "@reduxjs/toolkit" 
import { MainPageReduser } from './Reduser/MainPageReduser'
import { UserReduser } from './Reduser/UserReduser'
import { InBasketReduser } from "./Reduser/InBasketReduser"
import { ReviewsReduser } from "./Reduser/ReviewsReduser"

export const store = configureStore({
    reducer :{
        MainPageReduser: MainPageReduser,
        InBasketReduser: InBasketReduser,
        UserReduser: UserReduser,
        ReviewsReduser: ReviewsReduser,
    }
})