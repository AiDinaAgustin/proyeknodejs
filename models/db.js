const e = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'kuliah'
});

connection.connect((err) => {
    if (err){
        console.log('Error connecting to MYSQL database:', err);
    } else {
        console.log('Connected to MYSQL database');
    }
});

module.exports = connection;