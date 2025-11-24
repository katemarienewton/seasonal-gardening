/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('auth0_id')
    table.string('email')
    table.number('region_id')
  
    
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
