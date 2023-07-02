const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//express app
const app = express();

// connection to mongodb
const dbURI =
    'mongodb+srv://begiedz:HP7x5XUbDq9VJaiE@begiedzdb.0l1scj2.mongodb.net/begiedzdb?retryWrites=true&w=majority';
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) =>
        app.listen(3000, () => {
            console.log(`Listening on http://localhost:3000`);
        })
    )
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

//middleware & static files

app.use(express.static('public'));

app.use(morgan('dev'));
// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// responses
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
