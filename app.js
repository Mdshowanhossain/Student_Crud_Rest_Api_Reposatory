const express = require('express');
require('./database/DBConnection');
const Student = require('./models/StudentSchema');
const StudentRouter = require('./routes/Students');
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());

// app.post('/students', async (req, res) => {

//     const postStudentData = new Student(req.body)
//     try {
//         const student = await postStudentData.save();
//         res.send(student);
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

// app.get('/students', async (req, res) => {
//     try {
//         const studentData = await Student.find()
//         res.send(studentData)
//     } catch (err) {
//         console.log(err)
//     }
// })

// app.get('/students/:id', async (req, res) => {

//     const _id = (req.params.id)
//     try {
//         const student = await Student.findById({ _id: _id })
//         res.send(student)
//     }
//     catch (err) {
//         console.log(err)
//     }
// })

// app.delete('/students/:id', async (req, res) => {
//     const _id = req.params.id
//     try {
//         const deleteStudent = await Student.findByIdAndDelete({ _id: _id })
//         res.send(deleteStudent);
//     } catch (err) {
//         console.log(err)
//     }
// })

// app.patch('/student/:id', async (req, res) => {

//     try {
//         const _id = req.params.id
//         const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
//             new: true
//         })
//         res.send(updateStudent)
//     } catch (err) {
//         console.log(err)
//     }
// })

app.use('/students', StudentRouter)

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})