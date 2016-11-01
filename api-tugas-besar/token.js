var CryptoJS = require("crypto"),
    algorithm = 'aes-256-ctr',
    password = 'android';

var token = {};


token.get =  function(data){
	var cipher = CryptoJS.createCipher(algorithm,password);
	var message =  data.password;
	crypted = cipher.update(message,'utf8','hex');
	crypted += cipher.final('hex');
	return crypted;
};

token.get_real_value =  function(data){
	try {
	  var decipher = CryptoJS.createDecipher(algorithm,password) ;
	  var dec = decipher.update(data,'hex','utf8');
	  dec += decipher.final('utf8');
      visitor = {
        password : dec
      };
	  return visitor.password;
	}
	catch (e) {
		return 0;
	}
}


module.exports = token;
