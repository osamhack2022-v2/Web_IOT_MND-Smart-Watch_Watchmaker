
// require 했을때 users.json이 정상적으로 write 되지 않음
module.exports.updateUserInfo = async function (number, name, belong, rank, new_number, working, location, heartrate, tagID){

var sqlite3 = require('sqlite3').verbose(); 
const fs = require('fs');
const path = require('path');
const dbPath = path.resolve(__dirname, './db/UserDatabase.db');
  

let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        console.error(dbPath);
    } else {
        console.log('Connected to the UserDatabase.');
    }
});


const queries = [];
const vars = [ ["name",name], ["belong",belong], ["rank",rank], ["number",new_number], 
["working",working], ["location",location], ["heartrate",heartrate], ["tagID",tagID]];

vars.forEach((value)=>{

  if(value[1]!=undefined){
    queries.push( `UPDATE Users SET `+value[0]+`="`+value[1]+`" WHERE number="`+number+`";` )
  }
});
console.log("======update operating======")
console.log(queries)
db.serialize(() => {
  queries.forEach((query) => db.all(query,[],(err) =>{  if(err){ throw err; } } ) ); 

});
  

db.close((err) =>{
  if(err){
    console.error(err.message);
  }
  console.log('Close the database connection.');
}); 



}

//node sqlite-to_json.js 로 실행