// Library
const express = require('express');
const mysql = require('mysql');

// Panggil express function
const app = express();

// Route
app.get("/", (req, res) => {
    res.send("Hello ITB")
});

app.get("/test", (req, res) => {
    res.send("Hello World")
});

// Start Server
app.listen(3001, () => {
    console.log('Server started...')
});