/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('vegetables', (table) => {
    table.increments('id')
    table.string('name')
    table.string('scientific_name')
    table.string('description')
    table.integer('soil_id')
    table.integer('spacing_id')
    table.integer('requirements_id')
    table.integer('feeding_id')
    table.integer('staking_id')
    table.integer('days_to_harvest_min')
    table.integer('days_to_harvest_max')
    table.integer('yield_per_plant_min')
    table.integer('yield_per_plant_max')
    table.string('storage')
    table.string('image')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('vegetables')
}
