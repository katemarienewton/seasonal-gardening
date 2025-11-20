/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.table('season', (table) => {
    table.varchar('hardiness_zone')
    table.dropColumn('region_id')
  })
}

export async function down(knex) {
  return knex.schema.table('season', (table) => {
    table.dropColumn('hardiness_zone')
    table.string('region_id')
  })
}
