import React, {useState} from "react";
import * as S from './styled'
import { useHistory } from "react-router-dom";

export default function Content(){

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
                    <h2>Gerenciar conta</h2>
                </div>
                <section class="info-1">
                    <div class="info-group">
                        <div class="info-image">
                            <img src="/img/cenoura.jfif" alt=""/>
                        </div>
                        <div class="info-content">
                            <h2>Lorem ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat purus, sagittis vitae augue id, malesuada malesuada sapien. Proin eget dictum nisl. Nulla congue ipsum eget aliquet varius. In nunc enim, mattis vel dui vel, laoreet tempus arcu.</p>
                        </div>
                    </div>
                </section>
                <section class="info-2">
                    <div class="info-group">
                        <div class="info-image">
                            <img src="/img/cenoura.jfif" alt=""/>
                        </div>
                        <div class="info-content">
                            <h2>Lorem ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat purus, sagittis vitae augue id, malesuada malesuada sapien. Proin eget dictum nisl. Nulla congue ipsum eget aliquet varius. In nunc enim, mattis vel dui vel, laoreet tempus arcu.</p>
                        </div>
                    </div>
                </section>
            </S.main>
        </>
    )
}