// Library
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser')

// Panggil express function
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "rootpass",
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

app.get("/readdata", (req, res) => {
    const sql = "SELECT * FROM matkul";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    });
});

app.post("/postdata/:nama", (req, res) => {
    console.log(req.body);
    console.log(req.body.nama);
    console.log(req.body.kode);
    res.send("Data sent");
});

// Start Server
app.listen(3001, () => {
    console.log('Server started...')
});