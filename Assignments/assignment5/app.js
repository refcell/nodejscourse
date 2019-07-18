const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();
app.engine('hbs', expressHbs({ defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

app.get('/', (req, res) => {
    res.render('index', { pageTitle: "Add User" });
});

app.get('/users', (req, res) => {
    res.render('users', { pageTitle: "Users", users, hasUsers: users.length > 0 });
});

app.post('/add-user', (req, res) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
});

app.listen(3142);