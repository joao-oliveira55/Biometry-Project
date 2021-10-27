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
        <S.main>
          Loguei
        </S.main>

 
      </>
    );
  }