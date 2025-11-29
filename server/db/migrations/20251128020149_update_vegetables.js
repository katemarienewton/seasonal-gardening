/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.table('vegetables', (table) => {
    table.integer('consumption_adult_kg')
    table.integer('consumption_child_kg')
  })
}

export async function down(knex) {
  return knex.schema.table('vegetables', (table) => {
    table.dropColumn('consumption_adult_kg')
    table.dropColumn('consumption_child_kg')
  })
}
