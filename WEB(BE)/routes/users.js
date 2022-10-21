var express = require('express');
var router = express.Router();
var sqlToJson = require('../sqlite_to_json'); 


/* GET users listing. */
router.get('/', function(req, res, next) {

  
  var content=sqlToJson.getUsers();//Connected to the UserDatabase; write end!; Close the database connection.
  console.log(content);

  console.log("Writed to users.json");
  var data = require('../db/users.json');
  res.send(data);
  
  console.log("sended to front");
});
//Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("서지혁", "체계대대 통신중대 3조","일병","22-70012345","근무Off","복지시설",0 );
//Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("서지혁", "체계대대 통신중대 2조","병장","21-70012333","근무On","AAOC",0 );
//Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("박원", "체계대대 운영중대 3조","일병","22-70000000","근무On","AAOC",0 );

module.exports = router;
