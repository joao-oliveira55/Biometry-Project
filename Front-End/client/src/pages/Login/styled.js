import styled from "styled-components"

export const main = styled.main`
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const login = styled.section`
    margin-left: 50px;
    box-shadow: 0 2px 4px #00000033;
    padding: 20px;

    input[type="file"] {
        display:none;

        &.biometria {
            display:block;
            margin: 10px;
        }
    }

    input[value="Voltar"] {
        border: none;
        box-shadow: 0 2px 3px #00000029;
        border-radius: 24px;
        font-size: 1em;
        font-weight: bold;
        color: #FFFFFF;
        cursor: pointer;
        background: #1351B4 0 0 no-repeat padding-box;
        width: 150px;
        height: 40px;
        margin: 0 auto;
    }

    span {
        display: flex;
        justify-content: center;
        font-size: 1.2rem;
        margin: 4% 0;
    }

    h1,h2{
        font-family: 'Quicksand', sans-serif;
    }

    h1{
        font-size: 30px;
        font-weight: 700;
        text-align: center;
    }

    h2{
        margin-top: 20%;
    }

    div{
        display: flex;
        margin: 20px 0;
        flex-direction: column;
    
        &.biometria {
            display:none;
        }
    }
    div#biometriaDiv{
        display:none;
    
        &.biometria {
            display: flex;
            margin: 20px 0;
            flex-direction: column;
        }
    }

    p{
        font-size: 16px;
        font-family: 'Quicksand', sans-serif;  
        font-weight: 700;
        margin-left: 10px;
    }

    .text{
        font-size: 15px;
        font-family: 'Oxygen', sans-serif; 
        font-weight: 400;
    
    }
    
`

export const form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    &.biometria {
        display:none;
    }

    label{
        font-size: 18px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;  
    }

    fieldset{
        border: 0;
        margin: 5px 0;
    }

    .input-enviar{
        width: 85%;
        height: 40px;
        padding: 0 20px 0 20px;
        background: #FFFFFF 0 0 no-repeat padding-box;
        border: 1px solid #888888;
        border-radius: 4px;
        font-size: 1em;
        font-style: italic;
    }

    .enviar{
        border: none;
        box-shadow: 0 2px 3px #00000029;
        border-radius: 24px;
        font-size: 1em;
        font-weight: bold;
        color: #FFFFFF;
        cursor: pointer;
        background: #1351B4 0 0 no-repeat padding-box;
        width: 150px;
        height: 40px;
        margin: 35px auto;
    }
`
