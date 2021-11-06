const express = require('express');
let session = require('express-session');
let route = require('./src/routes/routes.js');

const app = express();
const port = 3000;


// ICI les middleware !
app.set('view engine', 'pug');
app.use(express.static('public'));

// get et post
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Session avec notre cle

app.use(route);


// Server Start
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});