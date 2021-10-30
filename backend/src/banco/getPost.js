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

const getPost = async (title) => {
  
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const BDteste = client.db(dbName);
  const collectionCliente = BDteste.collection('Posts');
  const Posts = await collectionCliente.find({ title_post:title }).toArray();

  return Posts ; 

}

module.exports = getPost

