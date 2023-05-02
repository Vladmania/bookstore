import styled from "styled-components";


export const StyleProductInBasket = styled.div`
    display: grid;
    grid-template-columns: repeat(4,25%);
    justify-items: center;
    font-family: sans-serif;
    height: 160px;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 5px 0px 0px rgba(176,176,178,0.3);
    .product_in_basket{
        display: flex;
        
    }
    .product_in_basket img{
        width: 25%;
        height: 95%;
        margin: 2%;
        object-fit: contain;
    }
    .product_in_basket p{
        overflow: hidden;
        max-height: 74px;
        width: 65%;
    }
    .product_in_basket_prise{
        font-size: 30px;
        font-weight: bold;
    }
    .product_in_basket_quantity{
        display: flex;
        justify-content: center;
    }
    .product_in_basket_quantity p{
        margin: 0 4% 0 4%;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }
    .product_in_basket_quantity input{
        width: 10%;
        height: 30%;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
    .product_in_basket_sum{
        font-size: 30px;
        font-weight: bold;
    }
    .product_in_basket_delete{
        font-size: 15px;
        font-weight: bold;
        border: none;
        background-color: transparent;
        color: blue;
        cursor: pointer;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
       appearance: none; 
    }
   `