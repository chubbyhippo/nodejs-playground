const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)))
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'add-user.html'));
});

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname,  'users.html'));
});
app.listen(3000);