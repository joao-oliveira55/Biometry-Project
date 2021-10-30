import styled from "styled-components"

export const main = styled.main`
    .cabecalho{
        background-color: #1351b4;
        box-shadow: 0px 5px 20px 5px #4b4949;
        height: 80px;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cabecalho h2{
        color: #fff;
        text-transform: uppercase;    
    }

    section{    
        width: 80%;
        margin: 0 auto;
        padding: 20px;
    }
    .info-group{
        background-color: #f2f2f2;
        box-shadow: 0px 0px 20px 5px #1351b4;
        display: flex;
        align-items: center;
        height: 180px;
        overflow: hidden;
    }

    .info-image img{
        width: 100%;
    }
    .info-content{
        height: 150px;
        width: 50%;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;    
    }
    .info-content h2{
        color: #1351b4;
        text-transform: uppercase;
    }
`