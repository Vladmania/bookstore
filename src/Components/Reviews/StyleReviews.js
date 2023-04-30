import styled from "styled-components";

export const StyleReviews = styled.div`
   .reviews_cover{
    display: flex;
    align-items: center;
    padding: 30px 0;
    justify-content: space-around;
    box-shadow: 0px 5px 0px 0px rgba(176,176,178,0.3);
   }
   .reviews_cover_product{
    display: flex;
    align-items: center;
    width: 60%;
   }
   .reviews_cover_img{
    width: 10%;
    height: 100px;
    margin-right: 7%;
   }
   .reviews_cover_img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
   }   
   .reviews_cover_name{
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
   }
   .reviews_cover_button{
    display: flex;
    align-items: center;
    background-color: #005bff;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-family: GTEestiPro,arial,sans-serif;
    height: 60px;
    padding: 0 50px;
    cursor: pointer;
    text-align: center;
   }
   .reviews_cover_button:hover{
    background-color: #0558f2;
   }
   .reviews_add{
      width: 40%;
      border-radius: 9px;
      align-items: center;
      display: flex;
      background-color: #005bff;
   }
   .reviews_add_input{
      width: 80%;
      height: 40px;
      outline: none;
      border: 2px #005bff solid;
      border-radius: 9px;
      font-size: 20px;
      color: #001a34;
      font-family: sans-serif;
      padding: 0 3px;
   }
   .reviews_add_input_button img{
      justify-items: center;
      text-align: center;
      width: 40px;
      height: 40px;
      margin: 0 20px;
      background-color: #005bff;
   }
`