const { response } = require('express');
const jwt = require('jsonwebtoken');
const getPost = require('../banco/getPost');

const posts = (req, res )=>{
  console.log(req['tokenData'])

  const {title} = req.params

  console.log(title)
  getPost(title)
    .then( (result)=>{
      res.status(200).send(JSON.stringify(result))
      console.log(result)
    })
    .catch(
      console.error
      
    )
}

module.exports = posts