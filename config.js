require('dotenv').config()
const crypt = require('./utils/crypt');

['SECRET', 'ELMU_USERNAME', 'ELMU_PASSWORD'].forEach(key => {
  if (!process.env[key]) {
    throw new Error(`Env var "${key}" not set!`)
  }
})

const elmuPassword = crypt.decrypt(process.env.ELMU_PASSWORD)
const fogazPassword = crypt.decrypt(process.env.FOGAZ_PASSWORD)

module.exports = {
  secret: process.env.SECRET,
  elmu: {
    userName: process.env.ELMU_USERNAME,
    password: elmuPassword
  },
  fogaz: {
    userName: process.env.FOGAZ_USERNAME,
    password: fogazPassword
  }
}
