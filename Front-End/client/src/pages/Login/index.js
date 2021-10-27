import React, {useState} from "react";
import * as S from './styled'
import { useHistory } from "react-router-dom";
const axios = require('axios');



export default function Home() {
    const [ cpf, setCPF ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ messageForm, setMessageForm ] = useState('')
    const history = useHistory();

    function validateCPF(cpf) {
      // validação de CPF

      return true;
    }
    

    function handleEmail (e){
      e.preventDefault();

      axios.post('http://localhost:3001/login', {
        cpf: cpf,
        password: senha
      })
      .then(function (response) {
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        history.push("/home");
      })
      .catch(function (error) {
      
        console.log(error)
      });


  }
    
    return (
      <>
        <S.main>
          <section className="banner">
              <img src="/image/conta_govbr_v2.jpg" alt=""/>
          </section>
          <S.login>
              <h1>Ministerio do Meio ambiente</h1>

              <h2>Acesse a sua conta com:</h2>
              <div>
                  <img src="../id-card-solid.png" alt=""/>
                  <p>Numero do CPF</p>
              </div>
              <p className="text">Digite seu <strong>CPF</strong> para criar ou <strong>acessar</strong> sua conta gov.br</p>
              <S.form onSubmit={e => handleEmail(e)}>
                  <fieldset>
                      <label for="cpf">CPF</label>
                      <input className="input-enviar" name="cpf" type="text" placeholder="Digite seu CPF" value={cpf} onChange={e => setCPF(e.target.value)} />
                  </fieldset>
                  
                  <fieldset>
                      <label for="senha">Senha</label>
                      <input className="input-enviar" name="senha" type="text" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)} />
                      <span>{messageForm}</span>
                  </fieldset>

                  <input className="enviar" type="submit" value="Continuar"/>
              </S.form>
          </S.login>
        </S.main>

 
      </>
    );
  }