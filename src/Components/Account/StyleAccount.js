import styled from "styled-components";


export const StyleAccount = styled.div`
   display: flex;
   font-size: 20px;
   font-family: sans-serif;
   justify-content: space-around;
   margin-top: 2%;
   .account_user{
    display: flex;
    flex-flow: column;
    align-items: center;
    
   }
   img{
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
   }
   .account_user_data{
      display: flex;
      justify-content: space-between;
   }
   .account_user_accounting{
      width: 40%;
   }
   .account_user_button_avatar{
      margin: 10% 55% 0 0;
      width: 45%;
   }
   .account_user_editor{
      display: flex;
      border-radius: 8px;
      background-color: rgb(0, 91, 255);
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 600;
      font-family: sans-serif;
      min-height: 32px;
      min-width: 96px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      padding: 10px;
      margin: 0 15px 0 0;
   }
   .account_user_data_header{
      color: #707f8d;
      font-size: 12px;
      line-height: 16px;
      margin: 50px 0 0 0;
   }
   .account_user_data_header_data{
      margin: 0;
   }
   .account_user_editor_button{
      display: flex;
      margin-top: 20px;
   }
   input[type="number"]::-webkit-outer-spin-button,
   input[type="number"]::-webkit-inner-spin-button {
       appearance: none; 
   }


   `