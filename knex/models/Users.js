const bookshelf = require('./bookshelf')

const Users = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'users_id',
  hasTimestamps: true
})

module.exports = Users;