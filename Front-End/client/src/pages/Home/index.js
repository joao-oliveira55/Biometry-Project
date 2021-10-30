import React, {useState} from "react";
import * as S from './styled'

const axios = require('axios');

export default function Home() {

    const token = localStorage.getItem('token')

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.get(
      'http://localhost:3001/home',
      config
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    
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
                        <p>Gabriel Collo</p>
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
                <h2>bem vindo <i>*fulano*</i></h2>
            </div>
            <div class="sub-menu">                
                <div class="sub-menu-item">
                    <a href="/conteudo1/conteudo1.html">
                        <button>Gerenciar conta</button>
                    </a>
                </div>
                <div class="sub-menu-item">
                    <a href="/conteudo2/conteudo2.html">
                        <button>Informações sobre agrotóxicos</button>
                    </a>
                </div>
                <div class="sub-menu-item">
                    <a href="/conteudo3/conteudo3.html">
                        <button>Documentos de proprietários</button>
                    </a>
                </div>
                <div class="sub-menu-item">
                    <a href="/conteudo4/conteudo4.html">
                        <button>Ocorrências</button>
                    </a>
                </div>
                <div class="sub-menu-item">
                    <a href="/conteudo5/conteudo5.html">
                        <button>Propriedades registradas</button>
                    </a>
                </div>
                <div class="sub-menu-item">
                    <a href="/conteudo6/conteudo6.html">
                        <button>Gerenciar usuários</button>
                    </a>
                </div>
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