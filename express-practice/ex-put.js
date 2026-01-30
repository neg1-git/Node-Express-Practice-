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

app.put('/people/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;

    person=people.find((person)=>person.id===Number(id));

    if(!person){
        return res.status(400).json({success:false,msg:'id does not exist'});
    }

    const newPeople=people.map((person)=>{
        if(person.id===Number(id)){
            person.name=name;
        }
        return person;
    })

    res.status(200).json({success:true,data:newPeople});
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})