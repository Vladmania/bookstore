import styled from "styled-components";

export const StyleCardProduct = styled.div`
    grid-column-start: span 2;
    width: 100%;
    font-family: sans-serif;
.cardproduct_img{
        height: 50%;
        margin: 16px;
    }
    img{
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
    .cardproduct_comment{
        display: flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
    }
.cardproduct_img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}    
.cardproduct_info{
    align-items: flex-start;
    box-sizing: border-box;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 16px;
    width: 100%;
    margin-top: auto;
    margin-bottom: 5px;
}
.cardproduct_price{
    font-size: 20px;
    font-weight: 700;
    
}
.cardproduct_name{
    overflow: hidden;
    max-height: 40px;
    cursor: pointer;
}
.cardproduct_name a{
    text-decoration: none;
}
.cardproduct_button{
    display: flex;
    cursor: pointer;
    border-radius: 8px;
    background-color: #005bff;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    font-family: sans-serif;
    min-height: 32px;
    min-width: 96px;
    align-items: center;
    justify-content: center;
}
`