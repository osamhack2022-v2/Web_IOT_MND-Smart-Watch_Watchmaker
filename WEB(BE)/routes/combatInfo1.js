var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose(); 
var list=[];

// 중대 단위로 Get

function getFromDB(dbPath,getQuery){

  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        console.error(dbPath);
    } else {
        console.log('Connected to the UserDatabase.');
    }
  });
  
  db.serialize(()=>{
  db.all(getQuery,[],(err,rows) =>{
    if(err){
      throw err;
    }
    rows.forEach((row,index)=>{ row.index=index })
    list[0]=rows;
    db.close();

  });
  })
  return list[0];
}

/* GET users listing. */
router.get('/', function(req, res, next) {

  const path = require('path'); 
  const dbPath = path.resolve(__dirname, './../db/UserDatabase.db');
  const getQuery = `SELECT name, belong, rank, number, working, location, tagID FROM Users ORDER BY number ASC`;
  
  targetHead = "방공관제사령부"
  target = "32전대"

  var info = getFromDB(dbPath, `SELECT * FROM _`+targetHead+`;` ) 
  console.log(`SELECT * FROM _`+targetHead+`;`) //
  console.log(info) // 아아아악 도대체 왜 info에 result가 저장되는지???  비동기라서 아래쪽 쿼리로 이걸 처리해버리는듯...

  var result = { battalion : [], leader:"",leaderRank:"" } 
  result.battalion = getFromDB(dbPath,`SELECT * FROM _`+target+`;` )
  result.leader = info.leader;  result.leaderRank = info.leaderRank;
  result.deputy = info.deputy;  result.deputyRank = info.deputyRank;
  
  res.send(result)
  console.log("sended to front");
});


module.exports = router;
