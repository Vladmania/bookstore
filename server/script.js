const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors')
const path = require('path')
const userRouter = require('./router/router') 


app.use(cors({ 
  origin:['null', "http://localhost:3000"]
}))
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, '/images'))) 
app.use('/api', userRouter)


app.listen(PORT, () => {console.log("сервер запущен на порту", PORT)})
