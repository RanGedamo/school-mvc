
const fs = require('fs');

const createArrayTeachers = (req, res) => {
    fs.writeFile('./model/teacher-model.json', JSON.stringify(req.body), (error) => {
        if (error) return res.send({ massage: error })
    });
};
const getAllTeachers = (req, res) => {
    fs.readFile('./model/teacher-model.json' ,(error, data) => {
        if (error) return res.send({ massage: error})
        return res.send(data);
    })
}


module.exports = { createArrayTeachers, getAllTeachers }