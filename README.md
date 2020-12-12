# Engage Buddies App Social Network API

## Description 

An API for a Social Network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

It works with Express.js and mongoose, you can add, see, modify and delete users with their friend list and thoughts.


## Table of Contents

* [URLs](#urls)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [License](#license)
* [Test](#Test)
* [Questions](#questions)
* [Screenshots](#screenshots)


## URLs

* Link Video
    - [Youtube Video Part #1: https://youtu.be/NmgzhaPlwwY](https://youtu.be/NmgzhaPlwwY)
    - [Youtube Video Part #2: https://youtu.be/NH-oHrkBHjM](https://youtu.be/NH-oHrkBHjM)
    - [Youtube Video Part #3: https://youtu.be/p_1T3GrCWM8](https://youtu.be/p_1T3GrCWM8)
    - [Youtube Video Part #4: https://youtu.be/jyn-lh9uSso](https://youtu.be/jyn-lh9uSso)
    - [Google Drive Video Part #1: https://drive.google.com/file/d/1tFnoTwkPlE7wTq-aXKeelEdkNSFf6Y18/view](https://drive.google.com/file/d/1tFnoTwkPlE7wTq-aXKeelEdkNSFf6Y18/view)
    - [Google Drive Video Part #2: https://drive.google.com/file/d/1DueAFiPJImAvPOALoVbhH85MJP4Xq9Ed/view](https://drive.google.com/file/d/1DueAFiPJImAvPOALoVbhH85MJP4Xq9Ed/view)
    - [Google Drive Video Part #3: https://drive.google.com/file/d/1YZR9ncxKhCnWvdgbCDGNoPKx64fO_rbF/view](https://drive.google.com/file/d/1YZR9ncxKhCnWvdgbCDGNoPKx64fO_rbF/view)
    - [Google Drive Video Part #4: https://drive.google.com/file/d/1wsLvbuaP5gNolQ65tfelc21EvkHOmjAJ/view](https://drive.google.com/file/d/1wsLvbuaP5gNolQ65tfelc21EvkHOmjAJ/view)

* GitHub Repository:
    - [HTTPS: https://github.com/rogers0404/18-engage-buddies.git](https://github.com/rogers0404/18-engage-buddies.git)    
    - [GIT: git@github.com:rogers0404/18-engage-buddies.git](git@github.com:rogers0404/18-engage-buddies.git)


## Installation

You need some packages to run this application, 

- `git git@github.com:rogers0404/18-engage-buddies.git        //clone the repository`
- `npm i                                   // or npm install to get all packages and dependencies of NPM`
- `npm init                                // to get package.json`
- `npm install express                     // check wether you have installed npm packages or just install express`
- `npm install mongoose                     // check wether you have installed npm packages or just install`

## Usage 

Defining Express in the application:

`const mongoose = require('mongoose');`
`const express = require('express');`

`mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/18-engage-buddies', {`
`  useFindAndModify: false,`
`  useNewUrlParser: true,`
`  useUnifiedTopology: true`
`});`

Models in Mongoose using MongoDB

`const { Schema, model } = require('mongoose');`

`const UserSchema = new Schema({`
`  username: {`
`    type: String,`
`    trim: true,`
`    unique: true,`
`    required: 'Username is Required, please provide a username'`
`  },`
`  email: {`
`    type: String,`
`    unique: true,`
`    match: [/.+@.+\..+/, 'An valid Email must be entered'],`
`    required: 'Username is Required, please provide a username'`
`  },`
`  thoughts: [`
`    { type: String, ref: 'Thought' }`
`  ]`
`},`
`{`
`    toJSON: {`
`      virtuals: true,`
`      getters: true`
`    },`
`    id: false`
`  }`
`);`

`//Adding a self-reference of the schema`
`UserSchema.add({`
`  friends:`
`  [{ type: String, ref: 'User' }]`
`})`

`// get total count of friend`
`UserSchema.virtual('friendCount').get(function() {`
`    return this.friends.length;`
`  });`

`const User = model('User', UserSchema);`

The starting command-line is:

`npm start                                 // to run the server`

## Contributing

* Rogers Ramirez, Github User: [rogers0404](http://github.com/rogers0404)


## License

Note Taker with Express.js is licensed under the

![v1](https://img.shields.io/static/v1?label=License&message=None&color=inactive&&style=plastic)

None

Express.js Dependency is licensed under the

![v1](https://img.shields.io/static/v1?label=License&message=MIT&color=green&&style=plastic)

mongoose Dependency is licensed under the

Copyright (c) 2010 LearnBoost ![v1](<dev@learnboost.com>)

## Test

None

## Questions

If you have any questions about the application, you can check the documentation on my GitHub profile [https://github.com/rogers0404](https://github.com/rogers0404).

for more information you can have a question via email [rogers.ramirez2008@gmail.com](rogers.ramirez2008@gmail.com)  .


## Screenshots

### Screenshot 1

![](./public/assets/images/image1.jpg)