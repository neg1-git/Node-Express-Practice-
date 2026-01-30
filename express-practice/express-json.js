const express= require('express');
const path= require('path');
const {products,people}=require('./data.js')
const app= express();

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./abc/index.html'))
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/people',(req,res)=>{
    res.json(people)
})

app.use((req,res)=>{
    res.send('<h1>PAGE NOT FOUND</h1>')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})