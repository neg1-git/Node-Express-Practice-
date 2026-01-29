const {tasks}=require('../data')

const getAllTasks=(req,res)=>{

  if(!tasks){
    return res.status(400).json({success:false, msg:'no task found'});
  }

  return res.status(200).json({success:true,data:tasks});
}

const singleTask=(req,res)=>{
  const {id}= req.params;

  const single=tasks.filter((task)=>task.id===Number(id));

  if(!single){
    return res.status(400).json({success:false,msg:'id doesnt exist'})
  }

  return res.status(200).json({success:true,data:single})
}

const createTask=(req,res)=>{
  const task = req.body;

  if(!task){
    return res.status(400).json({success:false,msg:"write a task"})
  }

  return res.status(200).json({success:true,data:task})
}

const deleteTask= (req,res)=>{
  const {id} = req.params;

  const idCheck=tasks.find((task)=> task.id===Number(id))
  if(!idCheck){
    return res.status(400).json({success:false,msg:'id not there'})
  }

  const newTasks= tasks.filter((task)=>task.id!==Number(id))
  return res.status(200).json({success:true,data:newTasks})

}


module.exports={
  getAllTasks,
  createTask,
  singleTask,
  deleteTask
}