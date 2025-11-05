import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
dotenv.config()

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('Faltó definir la variable de entorno DATABASE_URL')
}

export const db = new Sequelize(databaseUrl, {
  models: [__dirname + '/../models/**/*'],
  dialectOptions: {
    ssl: {
      require: false,
    },
  },
})
