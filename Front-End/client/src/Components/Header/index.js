import React from "react";
import * as S from './styled'
import { useHistory } from "react-router-dom";

export default function Header(props) {
    const history = useHistory()

    function logOff(){
        localStorage.setItem('token', '')
        history.push("/");
        console.log('logOFF')
    }
    return (
      <>
        <S.header>
            <div id="header-menu">
                <div id="first">
                    <div class="logo">
                        <a href="/home">
                            <img src="/image/logo.png" alt=""/>
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
                        <img src="/image//usuario.png" alt=""/>
                        <p>{props.userName}</p>
                    </div>
                    <div id="btn-logout" >
                        <button onClick={() => logOff()}>
                            <img src="/image/logout.png" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </S.header>
      </>
    );
  }