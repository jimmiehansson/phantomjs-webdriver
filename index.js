var phantomjs = require('phantomjs-prebuilt')
var webdriverio = require('webdriverio')
var wdOpts = { desiredCapabilities: { browserName: 'chrome' } }

phantomjs.run('--webdriver=4444').then(program => {
  webdriverio.remote(wdOpts).init()
    .url('https://m2.ikea.com/no/no/p/bjursta-barbord-brunsvart-10152724/')
    .getTitle().then(title => {
      console.log('attempting to click btn');
      let buttonClick = browser.click(`search-field__button`);
      console.log('I clicked the btn: ', buttonClick);
      console.log(title) // 'Mozilla Developer Network'
      program.kill(); // quits PhantomJS
    })
})