const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'node_modules')));

app.use('/api',require('./api'));

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(3000, function () {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log("Your server, listening on port 3000");
});
