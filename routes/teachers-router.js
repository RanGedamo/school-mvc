const { createArrayTeachers, getAllTeachers } = require('../controllers/teachers-controller');
const router = require('express').Router();


router.post('/addTeacher', createArrayTeachers);
router.get('/', getAllTeachers)


module.exports = router