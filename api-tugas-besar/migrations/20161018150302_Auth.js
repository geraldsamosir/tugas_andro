'use strict';

exports.up = function(knex, Promise) {
    return knex.schema
   .createTable('Auth', function(table) {
     table.increments('id').primary();
     table.string('username');
     table.string('password');
     table.string('email').unique().collate('utf8_unicode_ci');
   });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('Auth');
};
