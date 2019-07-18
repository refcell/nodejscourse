const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', (req, res) => {
    res.send('<h1>This is the users page.</h1>');
});

app.use("/add-product", (req, res) => {
    console.log("Add product middleware.");
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">Submit</button></form>')
});

app.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res) => {
    res.send('<h1>This is the home page.</h1>');
});

app.listen(3005);