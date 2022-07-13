import mysql from 'mysql2'
import express from 'express'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs_basic_10_07'
});


connection.query(
    'SELECT * FROM `users`',
    function (err, results, fields) {
        console.log('>>>Check db: ');
        console.log(results);
    }
);

export default connection;