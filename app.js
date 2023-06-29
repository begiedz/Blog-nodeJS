const express = require('express');

//express app
const app = express();

//listen for req
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    // set path to index html realtive to root
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/info', (req, res) => {
    res.redirect('/about');
});

// 404
app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
});
