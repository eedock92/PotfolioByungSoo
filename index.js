const express = require('express');
const fs = require('fs');
const app = express();


app.get('/', (req, res) => {
    fs.readFile('/dist/index.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html ' });
        res.end(data);
    })
    
})

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('server on! http://loaclhost:' + port)
}) 

