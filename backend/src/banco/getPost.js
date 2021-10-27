const dotenv = require('dotenv')
dotenv.config()

const MONGO_CNSTRING = process.env.MONGO_CNSTRING

const { MongoClient, Collection } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const client = new MongoClient(MONGO_CNSTRING);

// Database Name
const dbName = 'teste';

const getInfor = async (id) => {
  
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const BDteste = client.db('teste');
  const collectionCliente = BDteste.collection('teste_collection');
  const userbanco = await collectionCliente.find({ _id:id }).toArray();

  const BDinforma = client.db('teste');
  const collectionInfor = BDinforma.collection('informacoes1');
  const findResult = await collectionInfor.find({}).toArray();
  
  // the following code examples can be pasted here...

  return findResult ; 

}

module.exports = getInfor

