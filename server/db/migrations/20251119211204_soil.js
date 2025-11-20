/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('soil', (table) => {
    table.increments('id')
    table.string('type')
    table.string('preparation')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('soil')
}
