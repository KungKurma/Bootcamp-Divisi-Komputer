// Library
const express = require('express');
const mysql = require('mysql');

// Panggil express function
const app = express();

// Start Server
app.listen(3000, () => {
    console.log('Server started...')
});