const http = require('http');
const fs = require('fs');

let counter = 0;

const server = http.createServer(function(request, response) {
    const pageTemplate = fs.readFileSync('index.html.template', 'utf8');

    if (request.url == "/1.jpg" || request.url == "/2.jpg") {
        console.log("hi!");
        const image = fs.readFileSync(request.url.substring(1));
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        });
        response.end(image);

        return;
    }

    if (request.url != '/') {
        response.end();
        return;
    }


    ++counter;
    const generatedPage = pageTemplate.replace('%COUNTER%', counter);

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end(generatedPage);
});
server.listen(2929); // set the port to your ID

