Practice #2
===========

## Task #1: Networking

Find an IP address of the server for a URL `http://auca.xyz`.

You can use one of the following

* `nslookup` or `dig`

Find a path from your machine to the remote AUCA server.

You can use one of the following

* `traceroute` or `tracepath`

Analyze HTTP requests and responses in your browser's developer tools.

Try to perform an HTTP request with `telnet` on a local or AUCA remote machine.

## Task #2: Practice Directory

Login to AUCA remote server. Use a `cp` command-line program to create a copy
of the `practice_1` directory under the a name `practice_2`.

    cp -r practice_1 practice_2

Open documentation for the `cp` utility with a `man` program to learn about the
meaning of the `-r` flag.

    man cp

Press `q` to exit.

Navigate into the newly created directory with `cd`.

    cd practice_2

## Task #2: Hyperlinks and Parameters

Add a link to another document in `index.html` from practice #1.

Add the following before the closing `</p>` tag.

```html
<a href="hi?first=<First Name>&last=<Last Name>">hi</a>
```

Replace `<First/Last Name>` with your first and last name.

## Task #3: Generating Pages

Create a `Node.js` web server to serve the `index.html` file and a new
dynamically generated page for path `hi` with an `Express` web framework.

Create a file `server.js`.

```js
var express = require("express");
var server = express();

server.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

server.get("/hi", function(request, response) {
  var firstName = request.query["first"] || "";
  var lastName  = request.query["last"]  || "";
  var fullName  = firstName + " " + lastName;

  response.send(
    "<!DOCTYPE html>"                +
    "<html>"                         +
    "  <head>"                       +
    "    <title>hi</title>"          +
    "  </head>"                      +
    "  <body>"                       +
    "    <p>Hi" + fullName + ".</p>" +
    "  </body>"                      +
    "</html>"
  );
});

server.listen(<your ID>);
```

Replace `<your ID>` with your university ID.

Install a web framework `Express` locally with an `npm` package manager.

    npm install express

Start the web server.

    node server.js

Open `http://auca.xyz:<your ID>` in a browser on your local machine. Try opening
the link. Experiment with different values. Try to remove one or two parameters.
Try to fix the server code.

Stop the server by pressing `CTRL+C`.

## Task #4: TBD

TBD

## Documentation

* [nslookup](https://www.freebsd.org/cgi/man.cgi?query=nslookup&manpath=Red+Hat+Linux%2fi386+7.3)
* [dig](https://www.freebsd.org/cgi/man.cgi?query=dig&manpath=Red+Hat+Linux%2fi386+7.3)
* [traceroute](https://www.freebsd.org/cgi/man.cgi?query=traceroute&manpath=Red+Hat+Linux%2fi386+7.3)
* [tracepath](https://www.freebsd.org/cgi/man.cgi?query=tracepath&manpath=Red+Hat+Linux%2fi386+7.3)
* [telnet](https://www.freebsd.org/cgi/man.cgi?query=telnet&manpath=Red+Hat+Linux%2fi386+7.3)

## Node.js World

* [Node.js](https://nodejs.org/en)
* [npm](https://www.npmjs.com)
* [Express](http://expressjs.com)
