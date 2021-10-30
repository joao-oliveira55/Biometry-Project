const dotenv = require('dotenv')
dotenv.config()

const MONGO_CNSTRING = process.env.MONGO_CNSTRING

const { MongoClient, Collection } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const client = new MongoClient(MONGO_CNSTRING);

// Database Name
const dbName = 'BD_MinisterioAmbiente';

const getInfor = async (cpf) => {
  let data = []
  let infoBanco = []
  // Use connect method to connect to the server
  await client.connect();
  const BDteste = client.db(dbName);
  const collectionCliente = BDteste.collection('users');
  const userbanco = await collectionCliente.find({cpf:cpf}).toArray();
  data.push(userbanco[0])

  let access = parseInt(userbanco[0].access) 
  const BDinforma = client.db(dbName);

  while (access != 0 ) {

    let collectionInfor = BDinforma.collection(`Information${access}`);
    let findResult = await collectionInfor.find({}).toArray();

    for(let res of findResult){
      infoBanco.push(res)
    }
    access -= 1
  }
  
  data.push(infoBanco)
  // the following code examples can be pasted here...
  return data ; 

}

module.exports = getInfor

