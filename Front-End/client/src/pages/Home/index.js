import React, {useState,useEffect} from "react";
import * as S from './styled'

const axios = require('axios');

export default function Home() {
    const [ information, setInformation ] = useState([])
    const [ user, setUser ] = useState("")

    const token = localStorage.getItem('token')

    useEffect(() => {
    
        const config = {
            headers: { Authorization: `Bearer ${token}` }
            };
            
        axios.get(
        'http://localhost:3003/home',
        config
        )
        .then(function (response) {
            console.log(response)
            setUser(response.data[0])
            setInformation(response.data[1])   
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

           
    },[])
    
    return (
      <>
        <S.header>
            <div id="header-menu">
                <div id="first">
                    <div class="logo">
                        <a href="/home/home.html">
                            <img src="../img/logo.png" alt=""/>
                        </a>
                    </div>
                    <div id="btn-menu">
                        <div id="lines">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div id="second">
                    <div id="dados-cliente">
                        <img src="../img/usuario.png" alt=""/>
                        <p>{user}</p>
                    </div>
                    <div id="btn-logout">
                        <button>
                            <img src="../img/logout.png" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </S.header>
        <S.main>
            <div id="saudacoes">
                <h2>bem vindo <i>{user}</i></h2>
            </div>
            
            <div class="sub-menu">                
                {
                    information.map( product =>{
                        return(
                            <div class="sub-menu-item">
                                <a href={ product.link}>
                                    <button>{product.title}</button>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </S.main>
        <S.footer>
            <div class="banner">
                <img src="../img/banner.jpeg" alt=""/>
            </div>

        </S.footer>
      </>
    );
  }