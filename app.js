const express = require('express');
require('./database/DBConnection');
const StudentRouter = require('./routes/Students');
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());

// app.post

// app.get

// app.get:id

// app.delete

// app.patch

app.use('/', StudentRouter)

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})