/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('user_garden', (table) => {
    table.increments('id')
    table.integer('user_id').references('users.id')
    table.integer('plant_id').references('vegetables.id')
  })
}
export function down(knex) {
  return knex.schema.dropTable('user_garden')
}
