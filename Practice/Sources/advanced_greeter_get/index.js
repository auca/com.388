const http = require('http');
const fs = require('fs');
const url = require('url');
const util = require('util');

const port = 2929; // set to your ID

const pageTemplate = fs.readFileSync('index.template.html', 'utf-8');

const server = http.createServer((request, response) => {
    if (request.method == 'GET') {
        const parseQueryString = true;
        const parsedURL = url.parse(request.url, parseQueryString);
        const query = parsedURL.query;

        const firstName = query['first-name'];
        const lastName = query['last-name'];

        let page = null;
        if (firstName && lastName) {
            page =
                pageTemplate.replace(
                    '%GREETING%',
                    // '<p>Hello, ' + firstName + ' ' + lastName + '</p>'
                    // `<p>Hello, ${firstName} ${lastName}</p>`
                    util.format("<p>Hello, %s %s</p>", firstName, lastName)
                );
            page = page.replace('%MESSAGE%', '<p>Goodbye</p>');
        } else {
            page = pageTemplate.replace('%GREETING%', '');
            page = page.replace('%MESSAGE%', '');
        }

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(page);
    } else {
        response.end();
    }
});

server.listen(port, () => {
    console.log('The server has started on port ' + port);
});
