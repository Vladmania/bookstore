import styled from "styled-components";

export const StyleMainPage = styled.div`
    display: grid;
    grid-template-columns: repeat(10,2fr);
    justify-items: center;
    margin-top: 40px;
    .main_page_baner{
        grid-column-start: span 10;
        display: flex;
        font-size: 0;
        position: relative;
        transition: all;
        white-space: nowrap;
        will-change: transform;
    }
    .main_page_baner_img{
        overflow: hidden;
        width: 100%;
        height: 300px;
    }
    .main_page_baner_img img{
        height: 100%;
       width: 100%;
       border-radius: 12px;
       left: 50%;
       transform: translateX(-100%);
}
        
`