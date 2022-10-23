var express = require('express');
var router = express.Router();
var updateUser = require('../sqlite_update'); 

router.post('/', function(req, res, next) {

    console.log("get update request")
    //updateUser.updateUserInfo("22-70007066",null,null,null,null,"근무Off","생활관",null);
    updateUser.updateUserInfo(req.body.number,req.body.name,req.body.belong,req.body.rank ,req.body.new_number,req.body.working,req.body.location,null,req.body.tagID);
    console.log("DB updated.");
    res.send("FE responsed")
    
  });


module.exports = router;