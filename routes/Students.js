const express = require('express');
const router = express.Router();


router.get('/route', (req, res) => {
    res.send('I am Router')
})

module.exports = router;