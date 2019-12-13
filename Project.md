Course Project
==============

## Blog

In this project we will create a simple blog application in several steps.

Throughout several iterations during our lab classes we were building a blog
application with _Node.js_, _Express_, _Sequelize_, and _MySQL_. The sources of
our final application can be found [here](https://github.com/toksaitov/blog).
For your final exam you have to redo every part on your own to be able to defend
it.

### Basics (15%)

1. A user can create, read, update, and delete (CRUD) the blog entries. The
   entries can be stored in memory for now (5%).

2. Add different types of users to the system. An administrator can do basic
   CRUD operations on blog entries. Other users can only read them (5%).

3. Add commenting support to the blog. All authenticated users can post comments
   under blog entries (5%).

4. We have tried using raw SQL queries in our _guestbook_ application. Now we
   will try to use an ORM (Object-Relational Mapping) system _Sequelize_ to move
   our in-memory data storage to the MySQL database (5%).

### Improvements (up to 20% or more)


* Improve navigation (add a navigation bar with links), add some general
  information pages such as an about page... (1%)
* Add markdown support for blog posts (1%)
* Add proper styling for all pages (2%)
* Allow users to manage their comments and administrators to manage all comments
  (update, delete) (3%)
* Add a registration form for new users (4%)
* Add [Kubernetes](https://kubernetes.io), [Docker](https://www.docker.com) or [Vagrant](https://www.vagrantup.com)
  support (4%)
* Add client-side JS code to check for errors or to dynamically update content
  with [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) (5%)
* Turn it into SPA (Single-Page-Application) with React (5%)
