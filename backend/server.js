const express = require('express');

const app=express();
app.use(express.json());
const db= require('./db/db');

const userRoutes=require('./routes/userRoutes');

app.use('/user',userRoutes);
require('dotenv').config();

app.get('/',(req,res)=>{
    res.send('Hello World');
}
);

app.listen(process.env.port,()=>{
    console.log('Server is running on port 3000');
}
);