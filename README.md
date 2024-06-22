# simple-node-js-react-npm-app

This repository is for the
[Build a Node.js and React app with npm](https://jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/)
tutorial in the [Jenkins User Documentation](https://jenkins.io/doc/).

The repository contains a simple Node.js and React application which generates
a web page with the content "Welcome to React" and is accompanied by a test to
check that the application renders satisfactorily.

The `jenkins` directory contains an example of the `Jenkinsfile` (i.e. Pipeline)
you'll be creating yourself during the tutorial and the `scripts` subdirectory
contains shell scripts with commands that are executed when Jenkins processes
the "Test" and "Deliver" stages of your Pipeline.


Prerequisites
Node.js
npm
Docker
Jenkins

Jenkins Pipeline
This project includes a Jenkins pipeline (Jenkinsfile) to build and serve the React app, and another pipeline (DockerPipeline.groovy) to pull and run Docker containers for PostgreSQL, Redis, MongoDB, and Mongo-Express.

Docker Setup
The DockerPipeline.groovy file sets up the following Docker containers:
1. PostgreSQL
2. Redis
3. MongoDB (with username: ati and password: ati1234)
4. Mongo-Express

Explanation:
Install Dependencies:
This stage uses the node:14 Docker image to install npm dependencies.

Test:
This stage runs tests using the node:14 Docker image.

Build:
This stage builds the React application using the node:14 Docker image.

Serve:
This stage starts the application and verifies it's running on port 3004.


















