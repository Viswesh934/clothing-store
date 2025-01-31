const prisma = require('../db/db');

const jwt= require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const generatetoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    });
}



const signup= async (req,res)=>{
    const {name,email,password}=req.body;
    const existinguser =await prisma.user.findUnique(
        {
            where:{
                email
            }
        }
    )
    if (existinguser){
        res.status(400).json({error:'User already exists'});
    }
    const hashedPassword= await bcrypt.hash(password,10);

    try{
        const user= await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword,
            }
        });
        console.log(user);
        res.status(201).json(user);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}


const login= async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user= await prisma.user.findUnique({
            where:{
                email
            }
        }); 
        const match= await bcrypt.compare(password,user.password);
  
        if(match){
            const token=generatetoken(user.id);
            console.log(token);
            res.status(200).json({token});
        }
        else{
            res.status(400).json({error:'Invalid credentials'});
        }
        
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}



module.exports={signup,login};
