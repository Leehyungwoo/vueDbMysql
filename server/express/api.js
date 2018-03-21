var mysql_dbc = require('../db/db_con')();
var connection = mysql_dbc.init();

var Name ="/api";
module.exports = function(app){
  app.get(Name+'/main',function(req , res){
    var sql = 'select * from test'
      connection.query(sql, function (err, result) {
         res.status(200).json(result);
      });
  });

  app.post(Name+'/test2', function(req, res) {
    console.log(req.body)
    res.status(200).json(req.body);
  });

  app.get(Name+'/submit', function(req, res) {
    console.log(req)
    var sql = "insert into test(name, email, address, regdate) value('"+req.query.name+"','"+req.query.email+"','"+req.query.address+"',now())"
      connection.query(sql, function (err, result) {
        console.log(err);
        console.log(result);
         res.status(200).json(result);
      });
  });

  app.post(Name+'/delete', function(req, res) {
    console.log(req)
    var sql = "delete from test where pk = '"+req.body.pk+"'"
      connection.query(sql, function (err, result) {
        console.log(err);
        console.log(result);
         res.status(200).json(result);
      });
  });

  app.post(Name+'/detail', function(req, res) {
    console.log(req)
    var sql = "select * from test where pk = '"+req.body.pk+"'"
      connection.query(sql, function (err, result) {
        console.log(err);
        console.log(result);
         res.status(200).json(result);
      });
  });

  app.post(Name+'/edit', function(req, res) {
    console.log(req)
    var sql = "update test set name = '"+req.body.name+"', email = '"+req.body.email+"', address = '"+req.body.address+"'  where pk = '"+req.body.pk+"'"
      connection.query(sql, function (err, result) {
        console.log(err);
        console.log(result);
         res.status(200).json(result);
      });
  });

  app.get(Name+'/test',function(req , res){
    if(req.query['s']){
      console.log(req.query['s']) 

    }else{
      console.log("없음") 
    }
   console.log(req.query) 
   //req.body['s']
  });
}