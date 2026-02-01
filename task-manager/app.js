const express=require('express');
const app= express();
const db = require('./db');
app.use(express.json())

const tasks=require('./routes/tasks')

app.get('/',(req,res)=>{
  res.status(200).send('<h1>YO!</h1>')
})

app.use('/tasks',tasks);


const testDb = async () => {
  try {
    const result = await db.query('SELECT NOW()');
    console.log("✅ Todo Database Connected! Time:", result.rows[0].now);
  } catch (err) {
    console.error("❌ Error connecting to DB:", err.message);
  }
};

testDb()

app.listen(5000,()=>{
  console.log('Server is listening on port 5000...')
})