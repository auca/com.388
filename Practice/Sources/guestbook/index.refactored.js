const http = require('http');
const fs   = require('fs');
const url  = require('url');
const util = require('util');
const qs   = require('querystring');

const port =
    2929;
const pageTemplate =
    fs.readFileSync('index.template.html', 'utf-8');
const messages =
    [];

function formMessageList(messages) {
    let messageList = '';
    for (let i = 0; i < messages.length; ++i) {
        let item = messages[i];
        messageList +=
            `<p>${item.name}</p>` +
            `<p>${item.message}</p>`;
    }

    return messageList;
}

function generatePageWithMessages(messages) {
    let messageList = formMessageList(messages);

    return pageTemplate.replace('%MESSAGES%', messageList);
}

function sendMessages(response, messages) [
    let page = generatePageWithMessages(messages);

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(page);
}

function receiveBody(request, onReceiveBodyCallback) {
    const MaximumBodyLength = 4096;

    let body = '';

    request.setEncoding('utf8');
    request.on('data', data => {
        body += data;
        if (body.length > MaximumBodyLength) {
            request.end();
        }
    });

    request.on('end', () => {
        onReceiveBodyCallback(body);
    });
}

function parseBody(body) {
    const query = qs.parse(body);

    const name = query['name'];
    const message = query['message'];
    return [name, message];
}

function processGet(request, response) {
    sendMessages(response, messages);
}

function processPost(request, response) {
    receiveBody(body => {
        let [name, message] = parseBody(body);
        if (name && message) {
            messages.push({
                'name' : name,
                'message' : message
            });

            sendMessages(messages);
        } else {
            response.end();
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

