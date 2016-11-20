
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('patientLocation', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('consultant')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('patientLocation')
}
