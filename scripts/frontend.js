// WIP
const rl = require('readline-sync')
const password = rl.question('Enter master password: ', { hideEchoBack: true })
const nwTest = ['elmu meroallas', 'fogaz meroallas', 'vizmuvek meroallas']
const index = rl.keyInSelect(nwTest, 'Which test?')
console.log(password, index)
