const express = require('express');
const { readFile } = require('fs');
// import express from 'express';
const app = express();

app.get('/', (req, res) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('sorry, out of order');
        }
        res.send(html);
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App avaible on http://localhost:3000`);
});
