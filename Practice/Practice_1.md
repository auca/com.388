Practice #1
===========

![Example](http://i.imgur.com/s0bswl0.png)

## Task #1: Tools

Get an [SSH](https://en.wikipedia.org/wiki/Secure_Shell) client in order to be
able to connect to the AUCA server.

You can get one from the following packages

* [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
* [Git](https://git-scm.com/downloads) (on Windows OpenSSH is bundled with Git)
* [Cygwin](https://www.cygwin.com) (install the OpenSSH package)

or you can select any other SSH client that you like.

For AUCA labs it is recommended to select a portable version of a selected
package.

## Task #2: Remote Server

Login to the remote server at `auca.space` through the SSH protocol.

    ssh <login>@auca.space

Replace `<login>` with your last name, followed by the underscore character,
followed by the first letter of your first name in lowercase.

## Task #3: Greeter

Use an `mkdir` command-line program to create a directory for the following
practice class.

    mkdir greeter

Navigate into the newly created directory with the `cd` built-in command.

    cd greeter

You need to create a separate directory for each lab.

## Task #4: index.html

Create an empty file of you new web page with a command-line editor `nano`.

    nano index.html

Type the HTML code of the page to show a greeting, some image, and a link to
some other website.

Save the file and exit by pressing `CTRL+X`, answering `y` and pressing `Enter`.

Ensure that you have created a new file by listing the contents of the current
directory.

    ls

You can get an image to test you first web page by doing an image search in your
favorite search engine. Ensure to only use images labeled for noncommercial
reuse for this project. Get the URL to the image from your browser and put it
side by side with your project by using `wget`.

    wget <URL>

You can also cleanup the name by changing it with the `mv` command.

    mv <old name> <new name>

Ensure that the `img` tag points to the file with the same name in your HTML
document.

Start a web server.

    python -m SimpleHTTPServer <your ID>

Use your ID as a port number to avoid a fight over a server port with some other
student.

On your local machine, start a browser and try to open your page under the
following URL

    http://auca.space:<your ID>

You can stop the server by pressing `CTRL+C` on a remote machine.

## Browsers

* [Google Chrome](https://www.google.com/chrome/browser/desktop)
* [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new)
* [Apple Safari](http://www.apple.com/safari)
* [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge)

## Developer Tools

* [Chrome DevTools](https://developer.chrome.com/devtools)
* [Firefox Developer Tools](https://developer.mozilla.org/en/docs/Tools)
* [Safari Web Development Tools](https://developer.apple.com/safari/tools)
* [Microsoft Edge Developer Tools](https://dev.windows.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/)

## Code Editors

* [Notepad++](https://notepad-plus-plus.org)
* [Atom](https://atom.io)
* [Visual Studio Code](https://code.visualstudio.com)
* [Sublime](https://www.sublimetext.com)

### Here Be Dragons

* [Vim](http://www.vim.org)
* [GNU Emacs](https://www.gnu.org/software/emacs)

## Other Helpfull Tools

* [WinSCP](https://winscp.net/eng/index.php)

## HTML

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [HTML Entities](https://developer.mozilla.org/en-US/docs/Glossary/Entity)
* [html](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
* [head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
* [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
* [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
* [body](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
* [br](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
* [p](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
* [em](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
* [strong](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
* [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
* [img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

