var knex ={};
knex.local = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'expressjs_api-tugas-besar'
  }
});

module.exports = knex.local;
