const mongoose = require('mongoose');
const Student = require('../models/StudentSchema');

mongoose.connect('mongodb://localhost:27017/Students')
    .then(() => console.log('Database connection SuccessFul'))
    .catch((e) => console.log(e))


