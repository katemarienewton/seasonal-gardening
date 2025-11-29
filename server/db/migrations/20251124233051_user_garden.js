/**
 * @param { import("knex").Knex } knex
 */
export function up(knex) {
  return knex.schema.createTable('user_garden', (table) => {
    table.increments('id')
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.integer('plant_id').references('vegetables.id').onDelete('CASCADE')
  })
}

export function down(knex) {
  return knex.schema.dropTable('user_garden')
}
