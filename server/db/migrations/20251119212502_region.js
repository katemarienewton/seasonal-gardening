/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('region', (table) => {
    table.increments('id')
    table.string('name')
    table.varchar('hardiness_zone')
    table.string('notes')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('region')
}
