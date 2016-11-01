var passwordHash = require('password-hash');
var  token  = require('../token.js');
var modelAuth =  require("../model/Auth");

var user ={};

user.index =  function(req,res){
  var data = {
      Login  : {
         "url" : "/users/login",
         "method":"POST",
         "Data"  :"email , password"
      },
      Register : {
         "url" : "/users/register",
         "method" :"POST",
         "Data":"username , password ,email"
      }
    }
  res.status(200);
  res.json(data);
}

user.login  = function(req,res){
   user_data = req.body;
   modelAuth.get_user(user_data).then(function(rows){
       data  =  rows[0];
       if(data != null){
         status =  passwordHash.verify(user_data.password, data.password);
         if(status){
           res.status(200);
           result = {
               "email" :  data.email,
               "token"  : token.get(user_data).toString()
           }
           res.json(result);
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

user.register =  function(req,res){
    user_data =  req.body;
    user_data.token_str  =	token.get(user_data).toString();
    user_data.password =  passwordHash.generate(user_data.password);
    modelAuth.createUser(user_data).then(function(rows){});
    result = {
       "email" :  user_data.email,
       "token" :  user_data.token_str
    }
    res.status(200);
    res.json(result);
}

user.test = function(req,res){
  res.status(200);
  res.json("protected data");
}
module.exports = user;
