import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import * as S from './styled'

const axios = require('axios');

export default function Content(){
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState([])
    const token = localStorage.getItem('token')
    const history = useHistory()
    let url = document.URL
    url = url.replace("http://localhost:3000/content/","")

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
        axios.get(
        `http://localhost:3003/post/${url}`,
        config
        )
        .then(function (response) {
            setTitle(response.data[0].title_post)   
            setContent(response.data[0].content_post)

            console.log(content)
            
        })
        .catch(function (error) {
            alert("Sua sessão foi expirada ou você não tem acesso. Faça o login novamente!")
            history.push("/");
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
                <div class="cabecalho">
                    <h2>{title}</h2>
                </div>
                {
                   content.map( cont =>{
                    return(
                        <section class="info-1">
                            <div class="info-group">
                                <div class="info-image">
                                    <img src="/img/cenoura.jfif" alt=""/>
                                </div>
                                <div class="info-content">
                                    <h2>{cont.title}</h2>
                                    <p>{cont.content}</p>
                                </div>
                            </div>
                        </section>
                    )
                }) 
                }
                
                
            </S.main>
        </>
    )
}