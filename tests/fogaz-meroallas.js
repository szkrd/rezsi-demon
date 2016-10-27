const config = require('../config')
// const value = process.env.VALUE || 'XXX'

console.log(1, config.fogaz.password)
module.exports = {
  'open fogaz site': function (client) {
    client
      .url('https://www.fogaz.hu/')
      .waitForElementVisible('body', 5000)
      .pause(3000)
      .click('.siteintro-close')
      .pause(3000)
  },
  'login via small form': function (client) {
    client
      .useXpath()
      .click('//h2[text()="Belépés"]')
      .useCss()
      .setValue('input#smallloginbox_username', config.fogaz.userName)
      .setValue('input#smallloginbox_password', config.fogaz.password)
      .click('a.loginbox_submit')
      // continue from here next time, right now fogaz.hu is not available
      .useXpath()
      .waitForElementVisible('//span[contains(text(),"Mérőállások rögzítése:")]/..', 10000)
      .useCss()
  },
  'navigate to meter report page': function (client) {
    client
      .useXpath()
      .click('//span[contains(text(),"Mérőállások rögzítése")]/..')
      .waitForElementVisible('//span[contains(text(),"Aktuális mérőállás:")]/..', 10000) // in table heading
      .click('//input[contains(text(),"mérőállás különbség számításához üsse le")]')
      .useCss()
      .pause(10000)
      .end()
  }
}
