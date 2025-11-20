/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('variety', (table) => {
    table.increments('id')
    table.integer('vege_id')
    table.varchar('name')
    table.string('notes')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('variety')
}
