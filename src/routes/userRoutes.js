const express = require('express');
const router = express.Router();
const mysqlConnection = require('../models/user');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * from users', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


router.post('/users', (req, res) => {
    console.log(req.body);
    res.json({ status: 'Data Received' });
});


module.exports = router;