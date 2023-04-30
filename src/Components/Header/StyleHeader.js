import styled from "styled-components";

export const StyleHeader = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
box-shadow: 0px 5px 0px 0px rgba(176,176,178,0.3);
.header_link{
    width: 14%;
    align-items: center;
    display: flex;
    justify-content: space-between;
}
h1{
    font-family: sans-serif; 
}
.header_poisk{
    width: 40%;
    display: flex;
    background: #005bff;
    border-radius: 9px;
    border: 1px #005bff solid;
}
input{
    width: 100%;
    outline: none;
    border: 1px #005bff solid;
    border-radius: 9px;
    font-size: 20px;
    color: #001a34;
    font-family: sans-serif;
    padding: 0 3px;
}
input:focus{
    outline: none;
}
span{
    border-radius: 9px;
    background-color: #005bff;
    
}
span:hover{
    cursor: pointer;
    background-color: #092CC9;
}
span img{
    width: 26px;
    padding: 1px 28px;
    
}
a{
    display: flex;
    flex-flow: column;
    text-decoration: none;
    align-items: center;
}
.header_logo{
    font-size: 40px;
    font-family: math;
}
.header_leangth_basket{
    width: 20px;
    height: 20px;
    color: white;
    background-color: #005bff;
    text-align: center;
    border-radius: 50%;
    align-items: center;
    position: relative;
    left: 15px;
    top: 20px;
}
`

export const Img =styled.img`
width: 40px;
`