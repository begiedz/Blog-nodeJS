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
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log('request made');
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }

    //send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            //res.end()
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});
