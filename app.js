const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>My List Works</h1>')
    console.log(res.statusCode)
});

app.listen(3000, () => {
    console.log('Server Start');
});