import React, { useState } from "react";
import * as S from './styled'
import { useHistory } from "react-router-dom";
const axios = require('axios');


export default function Home() {
    const [ cpf, setCPF ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ messageForm, setMessageForm ] = useState('')
    const [ veBiometria, setVeBiometria ] = useState('')
    const history = useHistory()
    const token = localStorage.getItem('token')

    function handleVoltar(e) {
      localStorage.setItem('token', '')
      localStorage.setItem('urls', '')
      localStorage.setItem('dados', '')
      
      setVeBiometria('')
    }
    
    function handleLogin (e){
      e.preventDefault();

      axios.post('http://localhost:3003/login', {
        cpf: cpf,
        password: senha
      })
      .then(function (response) {
        console.log(response)
        
        localStorage.setItem('dados', JSON.stringify(response.data))
        localStorage.setItem('urls', JSON.stringify(response.data.urls))
        
        setVeBiometria('biometria')

        makeComparison()

      })
      .catch(function (error) {
        setMessageForm('Verifique os dados inseridos.')

        setTimeout(() => {
          setMessageForm('')
        }, 3000)

        console.log(error)
      });

      function makeComparison() {
        // chama o opencv
        const cv = window.cv;
    
        const urls = JSON.parse(localStorage.getItem('urls'))
    
        document.getElementById('imageSrcComparison0').src = urls[0]
        document.getElementById('imageSrcComparison1').src = urls[1]
        document.getElementById('imageSrcComparison2').src = urls[2]
        document.getElementById('imageSrcComparison3').src = urls[3]
        document.getElementById('imageSrcComparison4').src = urls[4]
    
        let imgElement = document.getElementById('imageSrc');
        let inputElement = document.getElementById('fileInput');
        let imgElementComparison = document.getElementById('imageSrcComparison0');
    
        let contador = 0
        function mudaIMG(quantContours, contours) {
          if(contador <= 4) {
            insereEcomparaIMG(quantContours, contours)
          } else {
            contador = 0
          }
        }
    
        function insereEcomparaIMG(quantContours, contours) {
    
          //lendo imagem para comparação
          imgElementComparison = document.getElementById('imageSrcComparison' + contador);
          console.log(imgElementComparison)
          let imgComp = cv.imread(imgElementComparison);
          cv.imshow('canvasComparison', imgComp);
          imgComp.delete();
    
          let srcComp = cv.imread('canvasComparison');
          let dstComp = cv.Mat.zeros(srcComp.cols, srcComp.rows, cv.CV_8UC3);
    
          // Passa a imagem para escala de cinza
          cv.cvtColor(srcComp, srcComp, cv.COLOR_RGBA2GRAY, 0);
          cv.threshold(srcComp, srcComp, 170, 255, cv.THRESH_BINARY);
    
          // Instancia contornos e tenta encontra-los
          let contoursComp = new cv.MatVector();
          let hierarchyComp = new cv.Mat();
          cv.findContours(srcComp, contoursComp, hierarchyComp, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
          
          // Pinta os contornos no canva
          var quantContoursComp = 0;
          for (let i = 0; i < contoursComp.size(); ++i) {
              let colorComp = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),Math.round(Math.random() * 255));
              cv.drawContours(dstComp, contoursComp, i, colorComp, 1, cv.LINE_8, hierarchyComp, 100);
              quantContoursComp = i;
          }
      
    
          // encontra a quantidade de contornos para comparação
          let maxValueContour = quantContours > quantContoursComp ? quantContoursComp : quantContours
    
          // Faz a comparação dos contornos
          let somatoria = 0
          for (let i = 0; i < maxValueContour; ++i) {
              somatoria += cv.matchShapes(contours.get(i), contoursComp.get(i), 1, 0) > 1000 ? 100 : cv.matchShapes(contours.get(i), contoursComp.get(i), 1, 0);
          }
    
          srcComp.delete(); dstComp.delete(); contoursComp.delete(); hierarchyComp.delete();
          
          // Pega o resultado obtido das comparações
          let resultado = somatoria / maxValueContour
    
          if(resultado !== 0) {
            contador += 1
            setMessageForm('Acesso Negado!')
            mudaIMG(quantContours, contours)
          } else {
            setMessageForm('Acesso Concedido!')
            contador = 0
            var token = JSON.parse(localStorage.getItem('dados'))
            localStorage.setItem('token', token.token)
            setTimeout(() => {
              history.push("/home");
            }, 2500);
          }
          
        }
    
        // Pega o input file e transforma em imagem
        inputElement.addEventListener('change', (e) => {
          if (e.target.files.length !== 0) {
            imgElement.src = URL.createObjectURL(e.target.files[0]);
          }
        }, false);
    
        imgElement.onload = function() {
    
          //lendo canvas input
          let img = cv.imread(imgElement);
          cv.imshow('canvasInput', img);
          img.delete();
      
          let src = cv.imread('canvasInput');
          let dst = cv.Mat.zeros(src.cols, src.rows, cv.CV_8UC3);
    
          // Passa a imagem para escala de cinza
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
          cv.threshold(src, src, 170, 255, cv.THRESH_BINARY);
          
          // Instancia contornos e tenta encontra-los
          var contours = new cv.MatVector();
          let hierarchy = new cv.Mat();
          cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
      
          // Pinta os contornos no canva
          var quantContours = 0;
          for (let i = 0; i < contours.size(); ++i) {
              let color = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),Math.round(Math.random() * 255));
              cv.drawContours(dst, contours, i, color, 1, cv.LINE_8, hierarchy, 100);
              quantContours = i;
          }
    
          insereEcomparaIMG(quantContours, contours)
          
          src.delete(); dst.delete(); contours.delete(); hierarchy.delete();
      
        };
      }

    }
    
    return (
      <>
        <S.main>
          <section className="banner">
              <img src="/image/conta_govbr_v2.jpg"/>
          </section>
          <S.login>
              <h1>Ministerio do Meio ambiente</h1>

              <h2>Acesse a sua conta com:</h2>
              <div className={veBiometria}>
                <p>Numero do CPF</p>
                <p className="text">Digite seu <strong>CPF</strong> para criar ou <strong>acessar</strong> sua conta gov.br</p>
              </div>
              <div id="biometriaDiv" className={veBiometria}>
                <p>Biometria</p>
                <p className="text">Insira a sua <strong>digital</strong> para <strong>acessar</strong> sua conta gov.br</p>
                <input type="file" id="fileInput" name="file" className={veBiometria} />
                <span>{messageForm}</span>
                <input type="button" name="voltar" value="Voltar" onClick={e => handleVoltar(e)} />
              </div>
              <S.form onSubmit={e => handleLogin(e)} className={veBiometria}>
                  <fieldset>
                      <label for="cpf">CPF</label>
                      <input className="input-enviar" required name="cpf" type="text" placeholder="Digite seu CPF" value={cpf} onChange={e => setCPF(e.target.value)} />
                  </fieldset>
                  
                  <fieldset>
                      <label for="senha">Senha</label>
                      <input className="input-enviar" required name="senha" type="text" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)} />
                      <span>{messageForm}</span>
                  </fieldset>

                  <input className="enviar" type="submit" value="Continuar"/>
              </S.form>
          </S.login>
          <section>
            <div style={{display:'none'}}>
              <div class="inputComp">
                  <img id="imageSrcComparison0" alt="No" src='' />
                  <img id="imageSrcComparison1" alt="No" src='' />
                  <img id="imageSrcComparison2" alt="No" src='' />
                  <img id="imageSrcComparison3" alt="No" src='' />
                  <img id="imageSrcComparison4" alt="No" src='' />
                  <canvas id="canvasComparison" ></canvas>
              </div>
              <div class="inputoutput">
                  <img id="imageSrc" alt="No" />
                  <canvas id="canvasInput" ></canvas>
              </div>
            </div>
          </section>
        </S.main>

 
      </>
    );
  }