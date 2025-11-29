export function up(knex) {
  // This migration intentionally left blank because region_id already exists
  return Promise.resolve()
}

export function down(knex) {
  // Nothing to rollback
  return Promise.resolve()
}
