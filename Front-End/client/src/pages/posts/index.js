import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import * as S from './styled'

import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

const axios = require('axios');

export default function Posts(){
    const [ title, setTitle ] = useState("")
    const [ user, setUser] = useState("")
    const [ content, setContent ] = useState([])
    
    const token = localStorage.getItem('token')
    const history = useHistory()

    let url = document.URL
    url = url.replace("http://localhost:3000/posts/","")

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
        axios.get(
        `http://localhost:3003/post/${url}`,
        config
        )
        .then(function (response) {
            setTitle(response.data[1][0].title_post)   
            setContent(response.data[1][0].content_post)
            setUser(response.data[0][0].user)
            console.log(response)
        })
        .catch(function (error) {
            alert("Sua sessão foi expirada ou você não tem acesso. Faça o login novamente!")
            history.push("/");
            console.log(error);
        })
           
    },[])

    return (
        <>
            <Header userName={user}/>

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

            <Footer/>
        </>
    )
}