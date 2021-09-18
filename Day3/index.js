// Library
const express = require('express');
const mysql = require('mysql');

// Panggil express function
const app = express();

// Database connection
const db = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "8!hUnrBeLKAeEftewsO#c%k^XJ@O0SMW$tm10p4AF^Gb4wS1G93JM6GfzJBlz^^CH!2NpWxvRBfno4GDuKJVKeCTdefp#^k**v4s8wqfGBDpf6yE8tf&HYlbFW!%&H56",
    database: "bootcampday3"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected!")
});

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