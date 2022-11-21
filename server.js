const express = require('express');
const cors = require('cors');
const routerNames = require('./routes/names-router');
const routerStudents = require('./routes/students-router');
const routerTeachers = require('./routes/teachers-router');
const routerCourses = require('./routes/courses-router');

const app = express();
const port = 4040;


app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());
app.use('/names', routerNames);
app.use('/students', routerStudents);
app.use('/teachers', routerTeachers);
app.use('/courses', routerCourses);


app.get('/', (req, res) => {
    res.send({ massage: "success" });
});

app.listen(port, () => {
    console.log(`listen to port : ${port}`);
});