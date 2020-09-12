<p align="center">
 <h2 align="center">My Clinic</h2>
 <p align="center">My first react app. The code is written in <b>React Native.</b></p>
 <h3 align="left">Task</h3>
 <p align="left">
    - An account registration page for clinic 
    <br>- A login page for clinic
    <br>- A clinic user interface
  </p>
  
  <P>The app is integrated with and API server - <a href='https://github.com/cestbon258/clinic-server.git'>Clinic Server</a></p>
</p>

# Features
- [Installation](#installation)
- [Building Locally](#building-locally)
# Installation 
* [Node JS](https://nodejs.org/en/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
# Building locally

Clone the repo, and:

```md
$ npm install
```
Or you can run the development server with:

```md
$ npm start
```

_Note: Assume that your PC has setup the development enviroment properly.

#### Configure database connection

Change the Clinic Server domain in `/src/pages/Login.js`, `/src/pages/SignUP.js` and `/src/pages/Record.js`.

> Clinic Server: https://github.com/cestbon258/clinic-server.git

```md
// Clinic Server URL
http://127.0.0.1:3000 
```
