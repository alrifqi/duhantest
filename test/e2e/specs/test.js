// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'test user lists': function (browser) {
    const devServer = browser.globals.devServerURL + '/#/users'

    browser
      .url(devServer)
      .pause(5000)
      .assert.elementPresent('.title')
      .assert.elementPresent('button.btn-show-post')
      .assert.containsText('h5.title', 'User Lists')
      .end()
  },
  'test show post': function (browser) {
    const devServer = browser.globals.devServerURL + '/#/users'
    browser
      .url(devServer)
      .pause(2000)
      .click('.btn-show-post')
      .pause(5000)
      .assert.elementPresent('.post-panel')
      .end()
  },
  'test show album': function (browser) {
    const devServer = browser.globals.devServerURL + '/#/users'
    browser
      .url(devServer)
      .pause(2000)
      .click('.btn-show-album')
      .pause(5000)
      .assert.elementPresent('.album-panel')
      .end()
  }
}
