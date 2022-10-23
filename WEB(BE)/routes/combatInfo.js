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

  const getQuery = `SELECT name, belong, rank, number, working, location, tagID FROM Users ORDER BY number ASC`;
  db.all(getQuery,[],(err,rows) =>{
    if(err){
      throw err;
    }
    rows.forEach((row,index)=>{ row.index=index })
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


module.exports = router;
