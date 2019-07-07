// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.heading')
      .assert.containsText('h1', 'Bebida gelada, rápida a preço baixo')
      .assert.elementCount('input', 1)
      .end()
  }
}
