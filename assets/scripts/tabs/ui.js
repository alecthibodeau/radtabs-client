'use strict'
// This line connects my JS to my handlebars
const showTabsTemplate = require('../templates/tab-listing.handlebars')
// const api = require('./api.js')
// const events = require('./events.js')

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

const newTabSuccess = (data) => {
  console.log(data)
  $('#modalTitleNewTab').text('New tab created').css('color', '#9ac479')
  setTimeout(function () {
    $('#newTabModal').modal('hide')
    $('#modalTitleNewTab').text('New tab').css('color', '#fca778')
  }, 3000)
  // events.onGetTabs(event)
}

const updateTabSuccess = (data) => {
  console.log(data)
  $('#modalTitleUpdateTab').text('Tab updated').css('color', '#9ac479')
  setTimeout(function () {
    $('#updateTabModal').modal('hide')
    $('#modalTitleUpdateTab').text('Update tab').css('color', '#fca778')
  }, 3000)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  newTabSuccess,
  updateTabSuccess,
  getTabsSuccess,
  clearTabs,
  failure
}
