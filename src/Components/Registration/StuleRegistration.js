import styled from "styled-components";


export const StyleRegistration = styled.div`
   display: flex;
   flex-direction: column;
    font-family: sans-serif;
    h1{
        text-align: center;
    }
    .registration{
        width: 20%;
        margin: auto;
    }
    input{
        width: 100%;
        outline: none;
        border: 1px #005bff solid;
        border-radius: 9px;
        font-size: 20px;
        color: #001a34;
        font-family: sans-serif;
        padding: 8px 9px;
    }
    .registration_button{
        width: 150px;
        padding: 4%;
        cursor: pointer;
        background-color: #10c44c;
        border-radius: 8px;
        color: #fff;
        text-align: center;
        margin: auto;
        margin-top: 24px;
    }
    .registration_button:hover{
        background-color: #0cab41;
    }
    `