const express=require('express');
const app=express()
app.listen(8080,(req,res)=>{
   console.log('working!');
})

app.get('/',(req,res)=>{
    res.json({message:'working!!!'})
})
app.get('/get',(req,res)=>{
    res.json({message:'working get also'})
})