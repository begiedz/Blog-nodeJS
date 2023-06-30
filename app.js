const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

//listen for req
app.listen(3000);

//midleware & static files

app.use(express.static('public'));

// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Jak console.logować jak mistrz', snippet: ' Lorem ipsum dolor sit amet.' },
        { title: 'Java w wersji Script', snippet: ' Lorem ipsum dolor sit amet.' },
        { title: 'PHP dla opornych', snippet: ' Lorem ipsum dolor sit amet.' },
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

// 404
app.use((req, res) => {
    res.status(400).render('404', { title: '404' });
});
