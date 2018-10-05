require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log('Connected to the DB')
    })
    .catch((err) => {
        console.log(err)
    })

const c = require('./controller');
const { SERVER_PORT } = process.env;
const app = express();

app.use((req, res, next) => {
    next();
})

app.use(bodyParser.json());

app.get('/api/houses/', c.read)
app.post('/api/houses', c.create)
app.delete('/api/houses/:id', c.delete)












app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})