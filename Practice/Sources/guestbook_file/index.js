const http = require('http');
const fs   = require('fs');
const url  = require('url');
const util = require('util');
const qs   = require('querystring');

const port =
    2929;
const pageTemplate =
    fs.readFileSync('index.template.html', 'utf-8');
let messages = [];
try {
    messages = JSON.parse(fs.readFileSync('messages.json', 'utf-8'));
} catch (error) {
    console.log('The message file is not available.');
}

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

function generateMessageList() {
    let messageList = '';
    for (let i = 0; i < messages.length; ++i) {
        let item = messages[i];
        messageList +=
            `<p>${item.name}</p>` +
            `<p>${item.message}</p>`;
    }

    return messageList;
}

function generateMessagePage() {
    let messageList = generateMessageList();
    let page = pageTemplate.replace('%MESSAGES%', messageList);

    return page;
}

function sendMessages(response) {
    let messagePage = generateMessagePage();
    sendPage(response, messagePage);
}

function parseMessageBody(body) {
    const query = qs.parse(body);
    const name = query['name'];
    const message = query['message'];

    return [name, message];
}

function saveMessage(name, message) {
    messages.push({
        'name' : name,
        'message' : message
    });

    fs.writeFileSync('messages.json', JSON.stringify(messages));
}

function processGet(request, response) {
    sendMessages(response);
}

function processPost(request, response) {
    receiveBody(request, body => {
        let [name, message] = parseMessageBody(body);
        if (name && message) {
            saveMessage(name, message);
        }
        redirect(response, '/');
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
