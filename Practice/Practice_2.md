Practice #2
===========

## Task #1: Networking

Find an IP address of the AUCA server for a URL `http://auca.xyz`.

You can use one of the following programs

* `nslookup` or `dig`

Find a path from your machine to the remote AUCA server.

You can use one of the following

* `tracert`, `traceroute`, or `tracepath`

Analyze HTTP requests and responses in your browser's developer tools.

Try to perform an HTTP request with `telnet` on a local or AUCA remote machine.

## Task #2: Directories

Login to the AUCA remote server. Use a `cp` command-line program to create a
copy of the `practice_1` directory under a new name `practice_2`.

    cp -r practice_1 practice_2

Open documentation for the `cp` utility with a `man` program to learn about the
meaning of the `-r` flag.

    man cp

Press `q` to exit.

Move into the newly created directory with the `cd` built-in command.

    cd practice_2

## Task #2: Hyperlinks

Add a link to another document in `index.html` from practice #1.

Replace everything inside the `<p>` tag with the following

```html
Say <a href="hi?first=<First Name>&last=<Last Name>">hi</a>
```

Change `<First Name>` and `<Last Name>` to your first and last names.

## Task #3: Generated Pages

Create a `Node.js` web server to serve the static `index.html` file and a new
dynamically generated page for path `hi` with an `Express` web framework.

Create a file `server.js`.

```js
"use strict";

const express = require("express");
const server  = express();

const port = <Your ID>

server.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

server.get("/hi", function(request, response) {
  let firstName = request.query["first"] || "";
  let lastName  = request.query["last"]  || "";
  let fullName  = firstName + " " + lastName;

  let page = `
<!DOCTYPE html>
<html>
  <head>
    <title>hi</title>
  </head>
  <body>
    <p>Hi, ${fullName}</p>
  </body>
</html>
`.trim();

  response.send(page);
});

server.listen(port, function() {
  console.log(`Web server is listening on port ${port}.`);
});
```

Replace `<Your ID>` with your university ID. The port `port` variable should be
of type `number`.

Start the web server.

    node server.js

Open `http://auca.xyz:<your ID>` in a browser on your local machine. Try to open
the link on the first page. Try to change parameters in the URL to the second
page. Try to remove parameters. See what happens. Can you fix the server code?

Stop the server by pressing `CTRL+C`.

## Task #4: Reusing Styles

Reuse styles from `index.html` for the new dynamically generated page.

Extract contents of the `<style>` block in `index.html` into a separate file
under a name `style.css`.

    nano index.html

Position the cursor inside the `<style>` block. Press `CTRL+6`, move selection
up to the end of the block, and press `CTRL+K` to cut the text.

Replace the `<style>...</style>` block with the following

```html
    <link rel="stylesheet" href="style.css">
```

The link tag will tell the browser to load style information from the path
specified in the `href` attribute.

Open a new buffer by pressing `CTRL+R` and `ALT+F`, type the new file name
`style.css`, press `Enter`, paste text with `CTRL+U`, exit and save changes with
the `CTRL+X` combination.

Open the `server.js` file and add the same `link` tag for text in the `page`
variable.

Add a new handler for a `GET` request to the `style.css` file.

Add the following to `server.js`

```js
server.get("/style.css", function(request, response) {
      response.sendFile(__dirname + "/style.css");
});
```

Save the file, and start the server

    node server.js

Test new pages from the browser.

## Documentation

* [nslookup](https://www.freebsd.org/cgi/man.cgi?query=nslookup&manpath=Red+Hat+Linux%2fi386+7.3)
* [dig](https://www.freebsd.org/cgi/man.cgi?query=dig&manpath=Red+Hat+Linux%2fi386+7.3)
* [traceroute](https://www.freebsd.org/cgi/man.cgi?query=traceroute&manpath=Red+Hat+Linux%2fi386+7.3)
* [tracepath](https://www.freebsd.org/cgi/man.cgi?query=tracepath&manpath=Red+Hat+Linux%2fi386+7.3)
* [telnet](https://www.freebsd.org/cgi/man.cgi?query=telnet&manpath=Red+Hat+Linux%2fi386+7.3)
* [URL encoding](https://tools.ietf.org/html/rfc3986#page-12)

## Node.js

* [Node.js](https://nodejs.org/en)
* [npm](https://www.npmjs.com)
* [Express](http://expressjs.com)
