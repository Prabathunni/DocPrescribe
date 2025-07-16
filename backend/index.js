const express = require('express');
require('dotenv').config();
require('./config/dbConfig')

const app = express();

PORT=process.env.PORT

app.get('/',(req,res)=>{
    res.send('server running')
})

app.listen(PORT, ()=>{
    console.log(`Server Running at Port ${PORT}`);
    
})

