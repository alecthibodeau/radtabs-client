'use strict'
// This line connects my JS to my handlebars
const showTabsTemplate = require('../templates/tab-listing.handlebars')

const getTabsSuccess = (data) => {
  console.log(data)
  const showTabsHtml = showTabsTemplate({ tabs: data.tabs })
  $('.content').html(showTabsHtml)
}

const clearTabs = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getTabsSuccess,
  clearTabs,
  failure
}
