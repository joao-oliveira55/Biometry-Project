const jwt = require('jsonwebtoken');

const isAuthenticated = (req,res,next) =>{
  try{
    
    const token = req.headers.authorization.replace("Bearer ","")
    const validToken = jwt.verify(token,"12345")
    req['tokenData'] = validToken

    next()
  }
  catch(err){
    res.status(401).json("Unauthorized")
  }
  
}
module.exports = isAuthenticated