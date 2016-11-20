
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('patientLocation').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('patientLocation').insert({id: 1, name: 'Winston Peters', consultant: 'Daynes'}),
        knex('patientLocation').insert({id: 2, name: 'John Key', consultant: 'Kumar'}),
        knex('patientLocation').insert({id: 3, name: 'Andrew Little', consultant: 'Young'})
      ])
    })
}
