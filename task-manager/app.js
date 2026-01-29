const express=require('express');
const app= express();
app.use(express.json())

const tasks=require('./routes/tasks')

app.get('/',(req,res)=>{
  res.status(200).send('<h1>YO!</h1>')
})

app.use('/tasks',tasks);

app.listen(5000,()=>{
  console.log('Server is listening on port 5000...')
})