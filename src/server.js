// const http = require('http');
// const server = http.createServer((req, res) =>{
//     console.log('run request...');
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h3>Hello world!</h3>');
//     res.write('<h2>From NodeJs</h2>');
//     res.end();
// })
// server.listen(3000, 'localhost', ()=>{
//     console.log('NodeJs server is running on port: 3000');
// })


// const express = require('express')
import express from 'express';
import configViewEngine from './configs/viewEngine';
import  initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';
require('dotenv').config();
const app = express()
const port = process.env.PORT || 8080;
// the method backup, if process.env.PORT is undefined, port will equals 8080

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//line 24,25 of the code will allow developers to easily get date from the client side

// set up viewEngine
configViewEngine(app);

// init web route
initWebRoute(app);

// init api
initAPIRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})