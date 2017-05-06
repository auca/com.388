Course Project
==============

## Blog

In this project we will create a simple blog application in several steps.

Throughout several iterations during our lab classes we were building a blog application with _Node.js_, _Express_, _Sequelize_, and _MySQL_. The sources of our final application can be found [here](https://github.com/toksaitov/blog). For your final exam you have to redo every part on your own to be able to defend it. For grades _A-_ or _A_, you also have to complete a take-home Assignment in one week.

### Lab Tasks

1. A user can create, read, update, and delete (CRUD) the blog entries. The entries can be stored in memory for now.

2. Add different types of users to the system. An administrator can do basic CRUD operations on blog entries. Other users can only read them.

3. Add commenting support to the blog. All authenticated users can post comments under blog entries.

4. We have tried using raw SQL queries in our _guestbook_ application. Now we will try to use an ORM (Object-Relational Mapping) system _Sequelize_ to move our in-memory data storage to the MySQL database.

### Take-home Assignment

To defend your project for a grade of _A-_ or _A_, you need to add one major feature or make one major improvement to the system. This could be...

* Improve navigation (add a navigation bar with links), add some general information pages such as an about page...
* Allow users to manage their comments and administrators to manage all comments (update, delete)
* Add a registration form for new users
* Add markdown support for blog posts
* Add proper styling for all pages
* Add client-side JS code to check for errors or to dynamically update content with [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))
* Add [Docker](https://www.docker.com) or [Vagrant](https://www.vagrantup.com) support
