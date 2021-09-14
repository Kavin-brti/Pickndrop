const mysql = require('mysql');
const db = mysql.createConnection({
    host:"localhost",
    user:"Kavinbrti",
    password:"Kavin@2000",
    database:"pickdrop",
    multipleStatements:true

});
//connecting
db.connect((err)=>{ 
    if(!err) {console.log('Connected');}
    else {console.log(err);}
});

module.exports=db;