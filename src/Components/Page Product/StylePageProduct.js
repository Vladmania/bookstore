import styled from "styled-components";

export const StylePageProduct = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;

    .page_product_name{
        box-shadow: 0px 2px 0px 0px rgba(176,176,178,0.3);
    }

    .page_product_info{
        display: flex;
        justify-content: space-around;
        margin: 10px;
    }
    .page_product_info img{
        width: 30%;
        height: 100%;
    }
    .page_product_price{
        box-shadow: 5px 5px 15px 5px rgba(176,176,178,0.3);
        width: 20%;
        height: 155px;
        padding: 30px;
    }
    .page_product_price p{
        display: inline-block;
        background: #10c44c;
        border-radius: 8px;
        color: #fff;
        padding: 2px 8px;
        font-weight: 800;
        font-size: 30px;
    }
    .page_product_price div{
        display: flex;
        border-radius: 8px;
        background-color: #005bff;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        font-family: sans-serif;
        min-height: 32px;
        min-width: 96px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
    .page_product_description{
        width: 30%;
    }
    .cardproduct_comment img{
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

`