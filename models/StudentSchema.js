const mongoose = require('mongoose');
const validator = require('validator');



const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true,
        min: 3,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: [true, "Email is already in use"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email Address');
            }
        }
    },
    address: {
        type: String,
        require: true,
        trim: true,
        unique: false,
    },
    phone: {
        type: Number,
        min: 10,
        require: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Student = new mongoose.model("student", studentSchema);
module.exports = Student;