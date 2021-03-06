const config = require('../config')

// this default will break the form, this is intentional
const value = process.env.VALUE || 'XXX'

module.exports = {
  'open elmu site': function (client) {
    client
        .url('https://ker.elmuemaszenergiaszolgaltato.hu/')
        .waitForElementVisible('body', 5000)
        .waitForElementVisible('input#pLoginName', 5000)
  },
  'login': function (client) {
    client
        .setValue('input#pLoginName', config.elmu.userName)
        .setValue('input#pPassword', config.elmu.password)
        .pause(2000)
        .click('button#pLoginButton')
        .waitForElementVisible('#pCountdown', 15000) // the so called "Idozar" countdown in the upper right corner
        .waitForElementVisible('a[title="Mérőállás"]', 15000)
  },
  'navigate to meter report page': function (client) {
    client
        .pause(1000)
        .useXpath()
        .click('//span[contains(text(),"Mérőállás bejelentés")]/..') // button in the sidebar, the topmost menu is crappy
        .useCss()
        .waitForElementVisible('td.urBorderBox input[type=text]', 15000) // the first non-readonly textinput
  },
  'fill the current meter value and submit the form': function (client) {
    client
        .click('td.urBorderBox input[type=text]')
        .waitForElementVisible('input[title*="mérőállás"]', 100000) // added dynamically
        .setValue('td.urBorderBox input[type=text]', value)
        .useXpath()
        .click('//a/span[text()="Mentés"]/..')
        .useCss()
        .pause(5000)
        .end()
  }
}
