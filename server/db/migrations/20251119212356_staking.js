/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('staking', (table) => {
    table.increments('id')
    table.boolean('required')
    table.string('notes')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('staking')
}
