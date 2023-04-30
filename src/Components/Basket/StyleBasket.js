import styled from "styled-components";


export const StyleBasket = styled.div`
   display: flex;
   flex-direction: column;
    font-family: sans-serif;
    h1{
        text-align: center;
    }
    .basket_parameter{
        display: flex;
        justify-content: space-around;
        box-shadow: 0px 2px 0px 0px rgba(176,176,178,0.3);
    }
    .basket_button{
        width: 150px;
        padding: 0.5%;
        cursor: pointer;
        background-color: #10c44c;
        border-radius: 8px;
        color: #fff;
        text-align: center;
    }
    .basket_button:hover{
        background-color: #0cab41;
    }
   `