exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',function(table){
    table.increments();
    table.string('username').unique().notNullable();
    table.string('email');
    table.string('profile_pic')
    table.string('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};


