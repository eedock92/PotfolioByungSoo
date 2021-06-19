const express = require('express');
//const fs = require('fs');
const app = express();


app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
})

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('server on! http://loaclhost:' + port)
}) 

