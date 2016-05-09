Practice #5
===========

## Task #1: Client-side Scripting

Create an HTML page `primes.html` with the following form

![form](http://i.imgur.com/GmB5DGH.png)

Catch a `submit` event of the [form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms),
[prevent](https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault)
the browser's default behavior, get input data from the text field, find primes
up to the limit, dynamically [create](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
an element/s (a paragraph, a table with rows and columns) after the form element
and populate it with results.

## Task #2: Server-side Scripting

Modify the previous page, to include an option to perform calculations on the
server. If the option is set, allow the browser to issue an HTTP *GET* request
with form data encoded as a query string to a location specified in the `action`
attribute of the form element.

![example](http://i.imgur.com/tnJgKFv.png)

Use [Node.js](https://nodejs.org/en) as a server-side JavaScript environment
with a package manager [npm](https://www.npmjs.com) to download and setup
project dependencies. You can also use a web framework such as
[Express](http://expressjs.com) to simplify your job of handling HTTP and a
template engine like [jade](http://jade-lang.com) to generate HTML with
calculated results to send back.

Use the following `package.json` file to describe your project and its
dependencies to *npm*.

```json
{
  "name": "primes",
  "version": "1.0.0",
  "description": "Prime numbers generator",
  "author": "Your Name <you@email.com>",
  "dependencies": {
    "express": "^4.13.4",
    "jade": "^1.11.0"
  },
  "scripts": {
    "start": "node server.js"
  },
  "private": true
}
```

Your server code should go into a file called `server.js`. Client scripts, CSS
or any other [static](http://expressjs.com/en/starter/static-files.html) files
should go into a separate directory (such as `public`). Copy functions to find
prime numbers into a separate *Node.js* [module](https://nodejs.org/api/modules.html)
under the name `primes.js`.  Put HTML [template](http://expressjs.com/en/guide/using-template-engines.html)
files (from *Jade* or any other engine) into a directory called `views`.

The server should be able to send its initial page. It should also be able to
process a [path](http://expressjs.com/en/starter/basic-routing.html) specified
in the form's `action` attribute to extract query parameters, perform
calculations, [render](http://expressjs.com/en/guide/using-template-engines.html)
the resulting template, and send results back. The path for both tasks could be
the same and results could depend on the absence or presence of query
parameters.

Issue a command `npm install` in your project's directory to install *Express*
and *Jade*. To start the server call `npm start` or `node server`. Use the
*CTRL+C* key combination to stop the process.

*Node.js* and npm are available on our [server](https://github.com/auca/com.388/blob/master/Practice/Practice_1.md).
Be sure to use your university ID as a port number for your application to be
able to access it on the web.

## Documentation

* [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [Node.js Documentation](https://nodejs.org/en/docs)
* [NPM Documentation](https://docs.npmjs.com)
* [Express Documentation](http://expressjs.com/en/4x/api.html)
* [Jade Language Reference](http://jade-lang.com/reference)
