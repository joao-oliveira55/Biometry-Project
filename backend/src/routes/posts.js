const { response } = require('express');
const jwt = require('jsonwebtoken');
const getPost = require('../banco/getPost');

const posts = (req, res )=>{

  const {title} = req.params
  const {cpf} = req['tokenData']

  function validateAccess (data){
    const accessUser = data[0][0].access
    const accessPost = data[1][0].access
    
    if(accessUser >= accessPost){
      return true
    }else{
      return false
    }
  }

  getPost(title,cpf)
    .then( (result)=>{

      if(validateAccess(result) == true){
        res.status(200).send(JSON.stringify(result))
      }else{
        res.status(401).json("não autorizado")
      }
    })
    .catch(
      console.error
    )
}

module.exports = posts