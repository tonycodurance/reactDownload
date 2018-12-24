module.exports = {
  'Download React of specified version' : function (browser) {
    const reactVersion = process.argv[3]

    browser
    .maximizeWindow()
    .url(browser.globals.reactDownloadSiteUrl)
    .waitForElementVisible(
    'p.project-links span a[href*="registry.npmjs"]', 1000, 'Finding Download link...')
    .expect.element('body > div.container h1 > small').text.to.equal('Release ' + reactVersion)

    browser
    .expect.element('body > div.container h1 > small').text.not.to.contain('-alpha')

    browser
    .click('p.project-links span a[href*="registry.npmjs"]')
    .end()
  }
}
