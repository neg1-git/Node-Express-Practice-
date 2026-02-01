const db = require('../db');

const getAllTasks=async(req,res)=>{

try {
    const result = await db.query('SELECT * FROM tasks');    
    res.status(200).json({ success: true, data: result.rows });
    } catch (error) {
    res.status(500).json({ msg: 'Something went wrong' });
  }
}

const singleTask = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM tasks WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, msg: `No task with id: ${id}` });
    }

    return res.status(200).json({ success: true, data: result.rows[0] });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}

const createTask=async(req,res)=>{
  const {name} = req.body;

  if(!name){
    return res.status(400).json({success:false,msg:"write a task"})
  }

  try {
    const result= await db.query('INSERT INTO tasks (name) VALUES ($1) RETURNING *', 
      [name])
    return res.status(200).json({success:true,data: result.rows[0]})
  } catch (error) {
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}

const deleteTask= (req,res)=>{
  const {id} = req.params;

  try {
    const result = db.query(' Delete from tasks where id=($1)',[id])
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, msg: `No task with id: ${id}` });
    }
    return res.status(200).json({ success: true, msg: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Something went wrong' });
  }

}


module.exports={
  getAllTasks,
  createTask,
  singleTask,
  deleteTask
}