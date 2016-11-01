var passwordHash = require('password-hash');
var  token  = require('../token.js');
var modelAuth =  require("../model/Auth");


var check = {};

check.login =  function(req,res,next){
	var user_data =  req.params;
	user_data.password =  user_data.token;

	user_data.password =  token.get_real_value(user_data.password).toString();
	modelAuth.get_user(user_data).then(function(rows){
       data  =  rows[0];
       if(data != null && user_data.password != "0"){
         status =  passwordHash.verify(user_data.password, data.password);
         console.log(status);
         if(status){
           next();
         }
         else{
           res.status(403);
           res.json("anda bukan auth");
         }
       }
       else{
         res.status(403);
         res.json("anda bukan auth");
       }
   });
}

module.exports = check;