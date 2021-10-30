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
  
  // Use connect method to connect to the server
  await client.connect();
  const BDteste = client.db(dbName);
  const collectionCliente = BDteste.collection('users');
  const userbanco = await collectionCliente.find({cpf:cpf}).toArray();
  
  const access = userbanco[0].access

  const BDinforma = client.db(dbName);
  const collectionInfor = BDinforma.collection(`Information${access}`);
  const findResult = await collectionInfor.find({}).toArray();

  const data =[userbanco[0].user,findResult]
  
  // the following code examples can be pasted here...
  console.log(data)
  return data ; 

}

module.exports = getInfor

