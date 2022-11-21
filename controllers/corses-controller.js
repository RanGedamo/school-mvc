const coursesModel = require('../model/courses-model')

const getAllCourses = (req, res) => {
    if (coursesModel && coursesModel != []) return res.send({ massage: 'success', coursesModel })
}
const createCourse = (req, res) => {
    if (coursesModel) {
        coursesModel.push(req.body);
        return res.send({ massage: "success", coursesModel })
    }
    return res.send({ massage: "Course not available" })
}
const editCourseById = (req, res) => {
    const courseById = coursesModel.find(courseId => courseId.id == req.params.id);
    const courseIndex = coursesModel.indexOf(courseById);
    if (courseIndex > -1) {
        coursesModel[courseIndex] = req.body;
        return res.send({ massage: "success", coursesModel })
    };
    return res.send({ massage: "course not available" })
};
const getByIdCourse = (req, res) => {
    const courseById = coursesModel.find(courseId => courseId.id == req.params.id);
    if (courseById) {
        return res.send({ massage: "success", courseById });
    }
    return res.send({ massage: "Course not found" })
}
const removeCourse = (req, res) => {
    const courseById = coursesModel.find(courseId => courseId.id == req.params.id);
    const courseIndex = coursesModel.indexOf(courseById);
    if (courseIndex > -1) {
        coursesModel.splice(courseIndex, 1);
        return res.send({ massage: "success", coursesModel });
    };
    return res.send({ massage: "Course not found" })
};

module.exports = { getAllCourses, createCourse, getByIdCourse, editCourseById, removeCourse }