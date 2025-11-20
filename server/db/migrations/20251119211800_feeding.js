/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('feeding', (table) => {
    table.increments('id')
    table.string('schedule')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('feeding')
}
