const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Server Running for Week 3 Assignment 3.2")
})

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)})