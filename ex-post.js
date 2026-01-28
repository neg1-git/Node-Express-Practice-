const express= require('express');
const app= express();
const {products,people}=require('./data.js');
    
app.use(express.json());

app.get('/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/people',(req,res)=>{

    const {name}=req.body;

    if (!name) {
        return res.status(400).json({success:false,msg:'pls enter a name'})
    }

    res.status(200).json({success:true,person:name})
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})