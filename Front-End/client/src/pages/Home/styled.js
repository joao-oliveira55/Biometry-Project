import styled from "styled-components"

export const main = styled.main`
    #saudacoes h2{    
        margin: 60px auto 0;
        width: 80%;
        text-transform: uppercase;
        color: #1351b4;
    }
    #saudacoes h2 i{
        color: #000;
    }

    .sub-menu{    
        background-color: #f2f2f2;
        width: 80%;
        height: 400px;
        margin: 2px auto 100px;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
    }
    .sub-menu .sub-menu-item a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sub-menu .sub-menu-item a button{
        background-color: #fff;
        color: #1351b4;
        border:1px solid #1351b4;
        width: 90%;
        height: 80%;
        text-transform: uppercase;
        font-size: 25px;
    }
    .sub-menu .sub-menu-item a button:hover{
        background-color: #1351b4;
        color: #fff;
    }
`
