/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('post_harvest', (table) => {
    table.increments('id')
    table.integer('vege_id')
    table.string('preservation')
    table.string('recipe_ideas')
  })
}
export function down(knex) {
  return knex.schema.dropTable('post_harvest')
}
