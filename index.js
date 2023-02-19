const express = require("express");
var cors = require('cors')
const port = process.env.SERVER_PORT || 5000;
const mongodb = require('./db/connect');
const bodyParser = require('body-parser');
const app = express()
app.use(cors())

app
    .use(bodyParser.json())
    .use(cors())
    .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});