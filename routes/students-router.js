const router = require('express').Router();
const { getAllStudents, createStudent, getByIdStudent, updateStudent ,deleteStudent} = require('../controllers/students-controller');

router.get('/', getAllStudents)
router.post('/create', createStudent)
router.get('/byId/:id', getByIdStudent)
router.put('/update/:id', updateStudent)
router.delete('/delete/:id',deleteStudent)
module.exports = router;