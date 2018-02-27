const http = require('http');
const fs = require('fs');
const url = require('url');
const util = require('util');
const qs = require('querystring');

const port = 2929; // set to your ID

const pageTemplate = fs.readFileSync('index.template.html', 'utf-8');
const messages = [];

const server = http.createServer((request, response) => {
    if (request.method == 'GET') {
        let messageList = '';
        for (let i = 0; i < messages.length; ++i) {
            let item = messages[i];
            messageList +=
                `<p>${item.name}</p>` +
                `<p>${item.message}</p>`;
        }
        page = pageTemplate.replace('%MESSAGES%', messageList);

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(page);
    } else if (request.method == 'POST') {
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
            const query = qs.parse(body);
            const name = query['name'];
            const message = query['message'];

            let page = null;
            if (name && message) {
                messages.push({
                    'name' : name,
                    'message' : message
                });

                let messageList = '';
                for (let i = 0; i < messages.length; ++i) {
                    let item = messages[i];
                    messageList +=
                        `<p>${item.name}</p>` +
                        `<p>${item.message}</p>`;
                }
                page = pageTemplate.replace('%MESSAGES%', messageList);

                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(page);
            } else {
                response.end();
            }
        });
    } else {
        response.end();
    }
});

server.listen(port, () => {
    console.log(`The server has started on port ${port}.`);
});
