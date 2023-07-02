const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app = express();

// connection to mongodb
const dbURI =
    'mongodb+srv://begiedz:HP7x5XUbDq9VJaiE@begiedzdb.0l1scj2.mongodb.net/blogApp?retryWrites=true&w=majority';
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

//mongoose and mongodb sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'super blog',
        snippet: 'aaaaa',
        body: 'lorem ipsum',
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('64a12fdabdea8358d6137f2d')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// routes
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
