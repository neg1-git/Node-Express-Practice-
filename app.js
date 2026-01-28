const express= require('express');
const app= express();

const people= require('./routes/people')

app.use(express.json());

app.use('/people',people)

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})