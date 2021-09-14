const express = require('express');
const db = require("../Connection/connection");
const Router = express.Router();

Router.post('/',async (req,res)=>{
    var sql = "INSERT INTO FROM_ADDRESS VALUES(null,'"+req.body.Dno+"','"+req.body.street+"','"+req.body.town+"','"+req.body.city+"','"+req.body.pin+"','"+req.body.lmark+"','"+req.body.Mno+"')";
    await db.query(sql,(err,rows,field)=>{
        if(!err){
            console.log("From route"); 
        }
        else{
            console.log(err);
        }
    });
    res.send('From');
    console.log(req.body);
    res.send("Data sent");
})

module.exports=Router;