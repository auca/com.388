const http = require('http');
const fs = require('fs');
const url = require('url');
const util = require('util');
const qs = require('querystring');
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
const pageTemplate =
    fs.readFileSync('index.template.html', 'utf-8');
let messages = [];

function sendPage(response, page) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(page);
}

function receiveBody(request, onReceiveBodyCallback) {
    const maximum_body_length = 4096;

    let body = '';
    request.setEncoding('utf8');
    request.on('data', data => {
        body += data;
        if (body.length > maximum_body_length) {
            request.end();
        }
    });

    request.on('end', () => {
        onReceiveBodyCallback(body);
    });
}

function redirect(response, location) {
    response.writeHead(302, { 'Location': location });
    response.end();
}

function generateMessageList(onGeneratedMessageListCallback) {
    pool.query('SELECT * FROM guestbook_entries', (error, results, fields) => {
        if (error) throw error;

        let messageList = '';
        for (let i = 0; i < results.length; ++i) {
            let item = results[i];
            messageList +=
                `<p>${item.name}</p>` +
                `<p>${item.message}</p>`;
        }

        onGeneratedMessageListCallback(messageList);
    });
}

function generateMessagePage(onGeneratedMessagePageCallback) {
    generateMessageList(messageList => {
        let page = pageTemplate.replace('%MESSAGES%', messageList);
        onGeneratedMessagePageCallback(page);
    });
}

function sendMessages(response) {
    generateMessagePage(messagePage => {
        sendPage(response, messagePage);
    });
}

function parseMessageBody(body) {
    const query = qs.parse(body);
    const name = query['name'];
    const message = query['message'];

    return [name, message];
}

function saveMessage(name, message, onFinishedSavingCallback) {
    let query = "INSERT INTO guestbook_entries SET name=?, message=?";
    pool.query(query, [name, message], (error, results, fields) => {
        if (error) throw error;

        onFinishedSavingCallback();
    });
}

function processGet(request, response) {
    sendMessages(response);
}

function processPost(request, response) {
    receiveBody(request, body => {
        let [name, message] = parseMessageBody(body);
        if (name && message) {
            saveMessage(name, message, () => {
                redirect(response, '/');
            });
        }
    });
}

http.createServer((request, response) => {
    if (request.method == 'GET') {
        processGet(request, response);
    } else if (request.method == 'POST') {
        processPost(request, response);
    } else {
        response.end();
    }
}).listen(port, () => {
    console.log(`The server has started on port ${port}.`);
});

