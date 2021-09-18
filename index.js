// Library
const express = require('express')
const mysql = require('mysql')

// Panggil express function
const app = express()

function feedbackSuccess() {
    console.log("Server started...")
}

// Start Server
app.listen(3000, feedbackSuccess)