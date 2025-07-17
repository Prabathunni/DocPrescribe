const express = require('express');
require('dotenv').config();
require('./config/dbConfig')
const router = require('./routes/router')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path')

const app = express();
PORT=process.env.PORT || 3000;

// cors middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


// middlewwares
app.use(express.json());
app.use(cookieParser())


app.use(router)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}



app.listen(PORT, ()=>{
    console.log(`Server Running at Port ${PORT}`);
    
})

