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
    // we create a variable with the data of the user
    // remember that the id is updated automatically for the db
    // the same for the fields updated_at and created_at
    const { username, password, email } = req.body;
    console.log(username);
    console.log(password);
    console.log(email);

    mysqlConnection.query('INSERT INTO users ( username, password, email) values ( ?, ?, ?)', [username, password, email], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'User load' });
        } else {
            console.log(err);
        }
    });
});


module.exports = router;