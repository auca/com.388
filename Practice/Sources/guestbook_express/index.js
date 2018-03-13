const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const dbName = process.env['DB_NAME'];
if (!dbName) {
    throw 'Please, specify the database name';
}

const dbUser = process.env['DB_USER'];
if (!dbUser) {
    throw 'Please, specify the database user name';
}

let dbPassword = process.env['DB_PASSWORD'];
if (!dbPassword) {
    dbPassword = '';
}

let dbHost = process.env['DB_LOCATION'];
if (!dbHost) {
    dbHost = '127.0.0.1';
}

let dbPort = process.env['DB_Port'];
if (!dbPort) {
    dbPort = '3306';
}

var pool = mysql.createPool({
    'connectionLimit' : 10,
    'host'            : dbHost,
    'port'            : dbPort,
    'user'            : dbUser,
    'password'        : dbPassword,
    'database'        : dbName
});

const port =
    2929;

function redirect(response, location) {
    response.writeHead(302, { 'Location': location });
    response.end();
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    pool.query('SELECT * FROM guestbook_entries', (error, results, fields) => {
        if (error) throw error;
        response.render('index', { 'results': results });
    });
});

app.post('/', (request, response) => {
    const name = request.body.name;
    const message = request.body.message;
    if (name && message) {
        let query = "INSERT INTO guestbook_entries SET name=?, message=?";
        pool.query(query, [name, message], (error, results, fields) => {
            if (error) throw error;
            redirect(response, '/');
        });
    }
});

app.listen(port, () => {
    console.log(`The server has started on port ${port}.`);
});

