Practice #1
===========

## Task #1: Tools

Get an [SSH](https://en.wikipedia.org/wiki/Secure_Shell) client in order to be able to connect to an AUCA server.

You can get one from the following packages

* [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
* [Git](https://git-scm.com/downloads) (on Windows OpenSSH is bundled with Git)
* [Cygwin](https://www.cygwin.com) (install the OpenSSH package)

or you can select any other SSH client that you like.

It is recommended to select a portable version of a selected program for use in AUCA labs.

## Task #2: Remote Server

Login to a remote server through the SSH protocol at `auca.xyz:2222`

    ssh -p 2222 <user name>@auca.xyz

Replace `<user name>` with your last name. Type all letters in lower case.

## Task #3: Practice Directory

Use an `mkdir` command-line program to create a directory for the following practice class.

    mkdir practice_1

Navigate into the newly created directory with an `cd` built-in command.

    cd practice_1

You need to create a separate directory for each lab when your are working on a remote server.

## Task #4: index.html

Create an empty file of you new web page with a command-line editor `nano`.

    nano index.html

Add the following

```html
<!DOCTYPE html>
<html>
  <head>
    <title>hello</title>
  </head>
  <body>
    <p>hello, world</p>
  </body>
</html>
```

Save the file and exit by pressing `CTRL+X`, answering `y` and pressing `Enter`.

Ensure that you have created a new file by listing content of the current directory.

    ls
    
Start a web server to send files in the current directory.

    python -m SimpleHTTPServer <your ID>

Use your ID as a port number to avoid a fight over a server port.

On your local machine, start a browser and try to open your page under the following URL

    http://auca.xyz:<your ID>

You can stop the server by pressing `CTRL+C` on a remote machine.

## Task #5: Styling with CSS

Make the page background black, and the text with a greeting white, large and centered.

Add the following after the closing `</title>` tag.

```html
<style>
    body {
        background-color: black;
    }
    
    p {
        color: white;
        font-size: 3em;
        text-align: center;
    }
</style>
```

* [background-color](https://developer.mozilla.org/en/docs/Web/CSS/background-color)
* [color](https://developer.mozilla.org/en/docs/Web/CSS/color)
* [font-size](https://developer.mozilla.org/en/docs/Web/CSS/font-size)
* [text-align](https://developer.mozilla.org/en/docs/Web/CSS/text-align)

## Task #6: Scripting with JavaScript

Write another greeting message, but into a browser console.

Add the following after the closing `</style>` tag.

```html
<script>
    console.log('hello, world, again');
</script>
```

## Task #7: Networking

Find an IP address of the server URL `http://auca.xyz`.

You can use one of the following

* `nslookup` or `Resolve-DnsName`
* `dig`

Find a path from your machine to the remote AUCA server.

You can use one of the following

* `tracert` or `Test-NetConnection -TraceRoute`
* `tracepath` or `traceroute`

Analyze HTTP requests and responses in your browser's development tools.

Try to perform an HTTP request with `telnet` on a local or AUCA remote machine.

## Additional Information

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
