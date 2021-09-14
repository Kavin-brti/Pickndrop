const express = require('express');
const bodyParser = require('body-parser');
const fromRoute = require('./Routers/fromRoute');
const toRoute = require('./Routers/toRoute');
const app = express();
const port = 5500;

const users = []
app.get('/users', (req, res) =>{
    res.json(users)
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/from',fromRoute);
app.use('/to',toRoute);
app.get('/',(req,res)=>{
    res.send('Started');
});


app.listen(port,()=>{
    console.log("Server is Running "+ port);
})