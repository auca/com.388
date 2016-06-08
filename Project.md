Course Project
==============

## AUCA Judge System

![Architecture](http://i.imgur.com/JLtDjC5.png)

Add database support to *auca-judge* system. For specific tasks refer to comments in 
`auca-judge-back.js` and `auca-judge-front.js` in the following projects.

* [auca-judge-back](https://github.com/toksaitov/auca-judge-back)
* [auca-judge-front](https://github.com/toksaitov/auca-judge-front)

### Supporting Services

The following services are required to run the *auca-judge* system.

* [auca-judge-agent](https://github.com/toksaitov/auca-judge-agent)
* [auca-judge-queue](https://github.com/toksaitov/auca-judge-queue)
* [auca-judge-images](https://github.com/toksaitov/auca-judge-images)

### Setup

Consider using a virtual [machine](https://www.virtualbox.org/wiki/Downloads) with Ubuntu Linux 14.04 or 16.04 installed
to prepare the execution environment.

* Install Docker: [instructions](https://docs.docker.com/linux/step_one)
* Install Node.js and npm: [instructions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
* Install MongoDB: [instructions](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-ubuntu)
* You can install `redis-server` from Ubuntu repositories through `sudo apt-get install redis-server`
* Install Git with `sudo apt-get install git`
* Clone *auca-judge* projects with Git `git clone <repository URL from GitHub>` to the home directory
* Follow Usage instructions for each *auca-judge* service

### Updates

All solutions were received. All repositories were updated. All services have received database support and were containerized.

To take a look on the current iteration of the system visit the umbrella [auca-judge](https://github.com/toksaitov/auca-judge) project.
