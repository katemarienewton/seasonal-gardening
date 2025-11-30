export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('auth0_id').unique()
    table.string('display_name')
    table.integer('region_id').nullable()
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
