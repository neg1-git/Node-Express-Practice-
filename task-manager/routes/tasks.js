const express= require('express');
const router=express.Router();

const {
  getAllTasks,
  createTask,
  singleTask,
  deleteTask
}= require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(singleTask).delete(deleteTask)

module.exports= router