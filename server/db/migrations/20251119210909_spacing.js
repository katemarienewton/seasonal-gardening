/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('spacing', (table) => {
    table.increments('id')
    table.integer('row_cm')
    table.integer('plant_cm')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('spacing')
}
