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

const getUser = async (cpf) => {
  
  // Use connect method to connect to the server
  await client.connect();
  console.log('connect to server')
  const db = client.db(dbName);
  const collection = db.collection('users');
  const userbanco = await collection.find({ cpf:cpf }).toArray();
  // the following code examples can be pasted here...

  return userbanco ; 

}

module.exports = getUser

