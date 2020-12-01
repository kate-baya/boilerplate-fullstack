
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, item: 'pear', price: '1.49'},
        {id: 2, item: 'casio watch', price: '15.00'},
        {id: 3, item: 'water', price: '7.00'}
      ]);
    });
};
