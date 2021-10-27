const jwt = require('jsonwebtoken');

const posts = (req, res )=>{
  console.log(req['tokenData'])

  // conectção com banco 

  // enviar resposta do banco
  res.send(JSON.stringify(req['tokenData']))
  
}

module.exports = posts