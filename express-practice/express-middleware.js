const express= require('express');
const app= express();
const logger= require('./logger');
const auth= require('./auth');

app.use([logger,auth])

app.get('/',(req,res)=>{
    res.send('WE HOME')
})

app.get('/about',(req,res)=>{
    res.send('ABOUT US')
})

app.use((req,res)=>{
    res.send('<h1>PAGE NOT FOUND</h1>')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})