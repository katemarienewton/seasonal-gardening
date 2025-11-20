/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('requirements', (table) => {
    table.increments('id')
    table.string('germination')
    table.string('sun')
    table.string('water')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('requirements')
}
