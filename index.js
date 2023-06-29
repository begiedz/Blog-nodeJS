// const express = require('express');
// const { readFile } = require('fs');
// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//     readFile('./home.html', 'utf8', (err, html) => {
//         if (err) {
//             response.status(500).send('sorry, out of order');
//         }
//         res.send(html);
//     });
// });

// app.listen(process.env.PORT || 3000, () => {
//     console.log(`App avaible on http://localhost:3000`);
// });

const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('request made');
    console.log(req.url, req.method);

    //set header content type
    //what content type i want to send
    res.setHeader('Content-Type', 'text/plain');

    res.write('hello, begiedz');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});
