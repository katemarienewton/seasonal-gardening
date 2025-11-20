/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('season', (table) => {
    table.increments('id')
    table.integer('vege_id')
    table.varchar('hardiness_zone')
    table.text('planting_month')
    table.text('harvest_month')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('season')
}
