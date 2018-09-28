
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('gallery', (table) => {
            table.increments('id').primary();
            table.string('author').notNullable();
            table.string('link').notNullable();
            table.string('description').notNullable();
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('gallery'),
    ])
};