const config = require('../config')

// this default will break the form, this is intentional
const value = process.env.VALUE || 'XXX'

module.exports = {
  'open elmu site': function (client) {
    client
        .url('https://ker.elmuemaszenergiaszolgaltato.hu/')
        .waitForElementVisible('body', 5000)
        .waitForElementVisible('input#pLoginName', 1000)
  },
  'login': function (client) {
    client
        .setValue('input#pLoginName', config.elmu.userName)
        .setValue('input#pPassword', config.elmu.password)
        .click('button#pLoginButton')
        .waitForElementVisible('#pCountdown', 5000) // the so called "Idozar" countdown in the upper right corner
        .waitForElementVisible('a[title="Mérőállás"]', 10000)
  },
  'navigate to meter report page': function (client) {
    client
        .click('a[title="Mérőállás"]')
        .pause(1000)
        .click('a[title="Mérőállás bejelentése"]')
        .waitForElementVisible('td.urBorderBox input[type=text]', 10000) // the first non-readonly textinput
  },
  'fill the current meter value and submit the form': function (client) {
    client
        .click('td.urBorderBox input[type=text]')
        .waitForElementVisible('input[title*="Leolvasott mérőállás oszlop"]', 1000) // added dynamically
        .setValue('td.urBorderBox input[type=text]', value)
        .useXpath()
        .click('//a/span[text()="Rögzítés"]/..')
        .useCss()
        .pause(10000)
        .end()
  }
}
