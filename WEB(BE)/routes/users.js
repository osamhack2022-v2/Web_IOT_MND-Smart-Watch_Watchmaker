var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose(); 

/* GET users listing. */
router.get('/', function(req, res, next) {

  const path = require('path'); 
  const dbPath = path.resolve(__dirname, './../db/UserDatabase.db');

  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
          console.error(err.message);
          console.error(dbPath);
      } else {
          console.log('Connected to the UserDatabase.');
      }
  });

  const getQuery = `SELECT name, belong, rank, number, working, location, heartrate FROM Users ORDER BY number ASC`;
  db.all(getQuery,[],(err,rows) =>{
    if(err){
      throw err;
    }
    res.send(rows); //send to Front by using express
  });

db.close((err) =>{
  if(err){
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
  

  console.log("sended to front");
});
//Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("서지혁", "체계대대 통신중대 3조","일병","22-70012345","근무Off","복지시설",0 );
//Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("서지혁", "체계대대 통신중대 2조","병장","21-70012333","근무On","AAOC",0 );
//Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("박원", "체계대대 운영중대 3조","일병","22-70000000","근무On","AAOC",0 );
//Insert Into Users(name,belong,rank,number,working,location,heartrate) Values ("최영인", "3통제대 식별반","일병","22-70008084","근무On","AAOC",0 );
//Select substr( belong,0, instr(belong,' ')+1) ,  count( *) from Users group by substr(belong,0, instr(belong,' ')+1);


module.exports = router;
