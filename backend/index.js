const express = require('express');
require('dotenv').config();
require('./config/dbConfig')
const router = require('./routes/router')
const cors = require('cors');
const cookieParser = require('cookie-parser');

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


app.use('/api', router)


app.get('/',(req,res)=>{
    res.send('server running')
})

app.listen(PORT, ()=>{
    console.log(`Server Running at Port ${PORT}`);
    
})

