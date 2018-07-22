'use strict'
// This line connects my JS to my handlebars
const showTabsTemplate = require('../templates/tab-listing.handlebars')

const getTabsSuccess = (data) => {
  console.log(data)
  const showTabsHtml = showTabsTemplate({ tabs: data.tabs })
  $('.info-section').show()
  $('.tab-return-content').html(showTabsHtml)
}

const clearTabs = () => {
  $('.tab-return-content').empty()
  $('.info-section').hide()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getTabsSuccess,
  clearTabs,
  failure
}
