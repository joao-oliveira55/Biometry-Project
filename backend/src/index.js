const express = require("express")
const routes = require("./routes")
const app = express()
const cors=require("cors");


const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(routes)
app.listen(3003)