const express = require('express');
const Student = require('../models/StudentSchema');
const router = express.Router();


router.post('/students', async (req, res) => {
    const postStudentData = new Student(req.body)
    try {
        const student = await postStudentData.save();
        res.send(student);
    }
    catch (err) {
        console.log(err);
    }
})

router.get('/students', async (req, res) => {
    try {
        const studentData = await Student.find()
        res.send(studentData)
    } catch (err) {
        console.log(err)
    }
})

router.get('/student/:id', async (req, res) => {
    const _id = (req.params.id)
    try {
        const student = await Student.findById({ _id: _id })
        res.send(student)
    }
    catch (err) {
        console.log(err)
    }
})

router.delete('/student/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const deleteStudent = await Student.findByIdAndDelete({ _id: _id })
        res.send(deleteStudent);
    } catch (err) {
        console.log(err)
    }
})

router.patch('/student/:id', async (req, res) => {
    try {
        const _id = await req.params.id
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updateStudent)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;