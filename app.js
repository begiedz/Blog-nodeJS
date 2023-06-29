const express = require('express');

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
//listen for req
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Print dupa', snippet: ' Lorem ipsum dolor sit amet.' },
        { title: 'Java w wersji Script', snippet: ' Lorem ipsum dolor sit amet.' },
        { title: 'PHHPPPP', snippet: ' Lorem ipsum dolor sit amet.' },
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
