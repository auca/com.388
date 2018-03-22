const express =
    require('express');
const bodyParser =
    require('body-parser');
const Sequelize =
    require('sequelize');

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

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    'host': dbHost,
    'port': dbPort,
    'dialect': 'mysql',

    'pool': {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Entries = sequelize.define('guestbook_entries', {
    'name': {
        type: Sequelize.STRING
    },
    'message': {
        type: Sequelize.STRING
    }
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
    Entries.findAll().then(entries => {
        response.render('index', { 'results': entries });
    }).catch(error => {
        console.error("Failed to fetch guestbook entries from the database.");
        console.error(error);
    });
});

app.post('/', (request, response) => {
    const name = request.body.name;
    const message = request.body.message;
    if (name && message) {
        Entries.create({
            'name': name,
            'message': message
        }).then(() => {
            redirect(response, '/');
        }).catch(error => {
            console.error("Failed to create a new guestbook entry in the database.");
            console.error(error);
        });
    }
});

Entries.sync().then(() => {
    app.listen(port, () => {
        console.log(`The server has started on port ${port}.`);
    });
});

