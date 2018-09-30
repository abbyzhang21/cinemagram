
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('gallery', (table) => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.string('author').notNullable();
            table.string('link').notNullable();
            table.string('description').notNullable();
            table.timestamps(true, true)
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('gallery'),
    ])
};