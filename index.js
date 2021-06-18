const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.redirect('/dist/index')
})

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('server on! http://loaclhost:' + port)
})
