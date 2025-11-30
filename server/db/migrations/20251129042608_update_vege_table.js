/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.table('vegetables', (table) => {
    table.string('image4')
  })
}

export async function down(knex) {
  return knex.schema.table('vegetables', (table) => {
    table.dropColumn('image4')
  })
}
