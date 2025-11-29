export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id').primary() // Auth0 user ID - have removed email as this is sensitive info and verified through auth0
    table.string('display_name')
    table.integer('region_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
