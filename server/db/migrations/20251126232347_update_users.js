/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.table('users', (table) => {
    table.string('email')
    table.integer('region_id')
  })
}

export async function down(knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('email')
    table.dropColumn('region_id')
  })
}
