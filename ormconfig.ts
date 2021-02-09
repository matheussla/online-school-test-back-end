import process from 'process'

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['./src/models/*.ts'],
  migrations: ['./src/components/migrations/*.ts'],
  cli: {
    migrationsDir: './src/components/migrations'
  }
}
