const express = require('express');

const app=express();
app.use(express.json());
const db= require('./db/db');
const cors= require('cors')

const coroptions={
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(coroptions));

const userRoutes=require('./routes/userRoutes');
const productRoutes=require('./routes/productRoutes');

app.use('/user',userRoutes);
app.use('/product',productRoutes);
require('dotenv').config();

app.get('/',(req,res)=>{
    res.send('Hello World');
}
);

app.listen(process.env.port,()=>{
    console.log('Server is running on port 3000');
}
);