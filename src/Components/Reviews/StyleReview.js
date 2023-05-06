import styled from "styled-components";

export const StyleReview = styled.div`
    margin: 50px 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
   .review_avatar_in_nickname{
    display: flex;
    align-items: center;
   }
   .review_avatar_in_nickname img{
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px black solid;
    margin: 0 30 0 0px;
   }
   .review_avatar_in_nickname p{
    font-size: 20px;
    font-weight: bold;
   }
   .review_text{
    max-width: 50%;
   }
   .review_foto_collection{
    display: flex;
   }
   .review_foto{
    width: 20%;
    height: 250px;
    overflow: hidden;
    margin: 5px;
   }
   .review_foto img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
   }
`