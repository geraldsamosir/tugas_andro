var knex =  require('../db');

var auth = {};

auth.get_user =  function(data){
	return knex('Auth')
		.where({
			email: data.email
		})
}

auth.createUser =  function(data){
  return knex("Auth")
       .insert({
         username : data.username,
         password : data.password,
         email  :data.email
       });
}

module.exports = auth;
