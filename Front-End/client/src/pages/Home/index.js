import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import * as S from './styled'

import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

const axios = require('axios');

export default function Home() {
    const [ information, setInformation ] = useState([])
    const [ user, setUser ] = useState("")
    const token = localStorage.getItem('token')
    const history = useHistory()

    useEffect(() => {
        
        const config = {
            headers: { Authorization: `Bearer ${token}` }
            };
            
        axios.get(
        'http://localhost:3003/home',
        config
        )
        .then(function (response) {
            
            setUser(response.data[0].user)
            setInformation(response.data[1])  
            
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

        <Footer/>
      </>
    );
  }