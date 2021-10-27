const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const getUser = require('../banco/getuser');
dotenv.config()
const JWT_SALT = process.env.JWT_SALT

const login = (req, res )=>{
  const {cpf, password} = req.body

  // coneção com banco 
  getUser(cpf)
  .then( (result)=>{
    if(result.length != 0){
      const {cpf, linkImg} = result[0]
      if(linkImg == password){
  
        var token = jwt.sign({cpf}, '12345',{expiresIn:1200});
  
        res.status(200).json({token})
      }else{
        res.status(401).json("senha incorreta")
      }
    }else{
      res.status(401).json("usuario inexistente")
    }
    
  })
  .catch(
    console.error
  )
}

module.exports = login
