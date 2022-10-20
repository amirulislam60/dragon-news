const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000

app.use(cors()); 

const categories = require('./Data/Categories.json');

app.get('/', (req, res) => {
    res.send('Newa API Running')
});

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})