const express= require('express');
const router = express.Router();

const {
  getPeople,
  createPerson,
  updatePerson
} = require('../controllers/people')

// router.get('/',getPeople)

// router.post('/',createPerson)

// router.put('/:id',updatePerson)

router.route('/').get(getPeople).post(createPerson);
router.route('/:id').put(updatePerson);

module.exports= router