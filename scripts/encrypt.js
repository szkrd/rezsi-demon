const crypt = require('../utils/crypt')
const secret = process.env.SECRET
if (!secret) {
  throw new Error('No SECRET')
}
const text = process.argv[2]
if (!text) {
  throw new Error('No param')
}
console.log(crypt.encrypt(text))
