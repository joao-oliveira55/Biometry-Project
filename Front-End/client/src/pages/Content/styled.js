import styled from "styled-components"

export const header = styled.header`
    margin-bottom: 50px;

    #header-menu{
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        height: 80px;
        border-bottom: 1px solid #1351b4;
        box-shadow: 0 0 20px 0 #1351b4;
    }
    #header-menu #first{
        margin-left: 10%;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #header-menu #first #btn-menu{
        height: 35px;
        width: 40px;
        background-color: #1351b4;
        color: #fff;
        border-radius: 5px;    
        display: flex;
        align-items: center;
    }
    #header-menu #first #btn-menu #lines{
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    #header-menu #first #btn-menu #lines div{
        border-top: 2px solid #fff;
        height: 0px;
        width: 80%;
    }

    #header-menu #second{
        display: flex;
        align-items: center;
        margin-right: 50px;
    }
    #header-menu #second #dados-cliente{
        display: flex;
        align-items: center;
        justify-content: space-between;    
        width: 150px;
        margin-right: 30px;
    }
    #header-menu #second #dados-cliente img{
        width: 30%;
    }
    #header-menu #second #btn-logout button{
        width: 40px;        
        background: transparent;
        border: none;
    }
    #header-menu #second #btn-logout img{
        width: 100%;
    }
`

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