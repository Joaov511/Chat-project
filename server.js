const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = 3060;

app.use(express.json());       
app.use(express.urlencoded({     
  extended: true
}));

function mySqlConnect() {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "1234",
    database : "chatApp"
  });

  con.connect(function(err) {
    console.log("Connected");
  });
}

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password : "1234",
  database : "chatApp"
});

con.connect(function(err) {
  console.log("Connected");
});

function mysqlQuery(data) {
  const query = 'insert into messages(content) values(?);';
  const values = [data];
  con.query(query,values,function(err,result) {
    if(err) throw err;
    console.log("Query was successful");
  });
}




app.post('/', (req,res) => {
  if(req.body.textInput != "") {
    mysqlQuery(req.body.textInput);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


