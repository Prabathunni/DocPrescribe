const express = require('express');
require('dotenv').config();
require('./config/dbConfig')
const router = require('./routes/router.js')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT=process.env.PORT || 3000;

// cors middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


// middlewwares
app.use(express.json());
app.use(cookieParser())
app.use('/api', router)

if(process.env.NODE_ENV === 'production'){
    const clientDist  = path.join(__dirname, '../frontend/dist')
    app.use(express.static(clientDist));

    // SPA - FALLBACK MIDDLEWARE----any route not start with /api/**/*
    app.use((req,res,next)=>{
        if(req.method==='GET' && !req.path.startsWith('/api/')){
            return res.sendFile(path.join(clientDist, 'index.html'))
        }
        next()
    })
}

app.get('/',(req,res)=>{
    res.send("server...")
})

app.listen(PORT, ()=>{
    console.log(`Server Running at Port ${PORT}`);
    
})

