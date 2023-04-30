import { StyleBanner } from "./StyleBanner"

export const Banner = (props) =>{
    return(
        <StyleBanner>
            <div className="main_page_baner">
            <div className="main_page_baner_img"><img src="https://static.wixstatic.com/media/799553_b7a07f95d6bf4350bd47ff779118b263~mv2.png/v1/fill/w_568,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/799553_b7a07f95d6bf4350bd47ff779118b263~mv2.png"></img></div>
            <div className="main_page_baner_img"><img src="https://rim-group.ru/upload/resize_cache/iblock/fdd/910_554_275511db9cefbc414a902a46f1b8fae16/image_2021-03-19_16-59-38.png"/></div>
            <div className="main_page_baner_img"><img src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg"></img></div>
            <div className="main_page_baner_img"><img src="https://www.shutterstock.com/image-vector/delicious-homemade-burger-chili-bbq-260nw-1804330342.jpg"></img></div>
        </div>
        </StyleBanner>
    )
}