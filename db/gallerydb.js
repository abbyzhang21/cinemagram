class gallery {
    constructor() {
        this.knex = require('../knex/knex.js')
    }
    all() {
        return this.knex.raw(`SELECT * FROM gallery`)
    }
    getItemById(id) {
        return this.knex.raw(`SELECT * FROM gallery WHERE id = ${id}`)
    }
    add(prod) {
        return this.knex.raw(`INSERT INTO items(name, description) VALUES('${prod.name}','${prod.description}')`)
    }
    updateItemById(id, products) {
        // getItemById(id);
        console.log('~~~~~~~', products)
        console.log('~~~', products.title)
        return this.knex.raw(`UPDATE items SET name ='${products.title}',description= '${products.body}'  WHERE id=${id}`)
    }
    deleteItemById(id) {
        return this.knex.raw(`DELETE FROM items WHERE id = ${id}`)
    }
}
module.exports = gallery;
