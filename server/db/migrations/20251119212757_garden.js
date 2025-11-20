/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('garden', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.integer('vege_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('garden')
}
