const jwt = require('jsonwebtoken');
const getInfor = require('../banco/getInfor');

const home = (req, res )=>{
  
  const {cpf} = req['tokenData']

  getInfor(cpf)
    .then( (result)=>{
      res.status(200).send(JSON.stringify(result))
    })
    .catch(
      console.error
    )
  // enviar resposta do banco
  
  
}

module.exports = home