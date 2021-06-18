const express = require('express');
const http = require('http');
const fs = require('fs');
//const app = express();

const server = http.createServer((req, res) => {

    if(request.method == 'GET' && http.request.url == '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream("./index.html").pipe(res)
    }
    
});


// app.get('/', (req, res) => {
//     res.send('hello')
// })

const port = process.env.PORT || 3000;

server.listen(port, function(){
    console.log('server on! http://loaclhost:' + port)
})

