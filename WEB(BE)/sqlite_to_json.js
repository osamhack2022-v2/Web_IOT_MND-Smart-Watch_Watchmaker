
// require 했을때 users.json이 정상적으로 write 되지 않음
module.exports.getUsers = function (){

var sqlite3 = require('sqlite3').verbose(); // sqlite3 모듈 불러와서 변수에 담기
const fs = require('fs');
const path = require('path'); // path 모듈 불러와서 변수에 담기
const dbPath = path.resolve(__dirname, './db/UserDatabase.db');
  

// 절대 경로 설정하기

let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        console.error(dbPath);
    } else {
        console.log('Connected to the UserDatabase.');
    }
}); // db sqlite3 db에 연결하는 코드!!
var content = "[\n";
const getQuery = `SELECT name, belong, rank, number, working, location, heartrate FROM Users ORDER BY number ASC`;
db.serialize(() => {
  db.all(getQuery,[],(err,rows) =>{
    if(err){
      throw err;
    }
    
    rows.forEach((row,index)=>{
      //console.log(row); 
      content+= ("{ \n\"index\": \""+index+
                "\",\n\"name\":\""+row.name+
                "\",\n\"belong\":\""+row.belong+
                "\",\n\"rank\":\""+row.rank+
                "\",\n\"number\":\""+row.number+
                "\",\n\"working\":\""+row.working+
                "\",\n\"location\":\""+row.location+
                "\",\n\"heartrate\":"+row.heartrate+"\n}");   
      content+=",\n";
      //console.log(content);
    });
    content=content.slice(0,-2)+"\n]\n"
    //console.log(content);
    
    fs.writeFile('db/users.json',content, function(error) { 
      console.log('write end!');
  });
  
  }
  );
});

db.close((err) =>{
  if(err){
    console.error(err.message);
  }
  console.log('Close the database connection.');
}); // db 닫는 코드!!
return content;

}
/*

module.exports.getSummary = async function (){

}
*/
//node sqlite-to_json.js 로 실행