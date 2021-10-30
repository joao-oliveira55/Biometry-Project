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

const getPost = async (title,cpf) => {
  let data = []
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const BD = client.db(dbName);
  const collectionPost = BD.collection('Posts');
  const Posts = await collectionPost.find({ title_post:title }).toArray();

  const collection = BD.collection('users');
  const userbanco = await collection.find({ cpf:cpf }).toArray();
  
  data.push(userbanco)
  data.push(Posts)

  return data ; 

}

module.exports = getPost

