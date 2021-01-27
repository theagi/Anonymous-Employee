const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000 || process.env.PORT;
const routes = require('./routes');
const app = express();
// app.all('/*',(req,res) =>{
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE');
//     res.header('Access-Control-Allow-Headers','Content-Type');
// });
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',routes);

app.get('/',(req,res) =>{
    console.log('home');
    res.send('Hi.');
});

app.listen(PORT,() => console.log('listening on port',PORT));