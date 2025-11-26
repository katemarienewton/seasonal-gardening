/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.table('vegetables', (table) => {
    table.string('image2')
    table.string('image3')
  })
}

export async function down(knex) {
  return knex.schema.table('vegetables', (table) => {
    table.dropColumn('image2')
    table.dropColumn('image3')
  })
}
