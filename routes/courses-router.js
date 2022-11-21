const router = require('express').Router();
const { getAllCourses, createCourse, getByIdCourse, editCourseById ,removeCourse} = require('../controllers/corses-controller');

router.get('/', getAllCourses);
router.post('/create', createCourse);
router.put('/edit/:id', editCourseById)
router.delete('/remove/:id',removeCourse)
router.get('/byId/:id', getByIdCourse);


module.exports = router;