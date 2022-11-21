const students = require('../model/students-model');

const getAllStudents = (req, res) => {
    if (students && students != []) {
        return res.send({ massage: "success", students });
    };
    return res.send({ massage: "students not found" });
};
const createStudent = (req, res) => {
    if (students) {
        students.push(req.body);
        return res.send({ massage: "success", students });
    };
};
const getByIdStudent = (req, res) => {
    const studentById = students.find(studentId => studentId.id == req.params.id);
    if (studentById) return res.send({ massage: "success", studentById });
    return res.send({ massage: "student not found" });
};
const updateStudent = (req, res) => {
    const updateStudentById = students.find(studentId => studentId.id == req.params.id);
    const indexStudent = students.indexOf(updateStudentById);
    if (indexStudent > -1) {
        students[indexStudent] = req.body;
        return res.send({ massage: "success", students });
    };
    return res.send({ message: "update not available" });
};
const deleteStudent = (req, res) => {
    const deleteStudentById = students.find(studentId => studentId.id == req.params.id);
    const indexStudent = students.indexOf(deleteStudentById);
    if (indexStudent > -1) {
        students.splice(indexStudent, 1);
        return res.send({ massage: "success", students });
    }
    return res.send({ massage: "Student not Found" })
}
module.exports = { getAllStudents, createStudent, getByIdStudent, updateStudent, deleteStudent }