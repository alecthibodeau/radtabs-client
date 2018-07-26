'use strict'

const store = require('../store')

// This line connects my JS to my handlebars
const showTabsTemplate = require('../templates/tab-listing.handlebars')

const getTabsSuccess = (data) => {
  // console.log(data)
  const showTabsHtml = showTabsTemplate({ tabs: data.tabs })
  $('.info-section').show()
  $('.tab-return-content').html(showTabsHtml)
}

const clearTabs = () => {
  $('.tab-return-content').empty()
  $('.info-section').hide()
}

const newTabSuccess = (data) => {
  // console.log(data)
  $('#modalTitleNewTab').text('New tab created')
  $('#new-tab').slideToggle(200)
  store.successMessageColor()
  setTimeout(function () {
    $('#newTabModal').modal('hide')
    // $('.modal-title').removeClass('success-message')
    $('#modalTitleNewTab').text('New tab')
    store.defaultMessageColor()
  }, store.successTimeout)
}

const updateTabSuccess = (data) => {
  // console.log(data)
  $('#modalTitleUpdateTab').text('Tab updated')
  $('#update-tab').slideToggle(200)
  store.successMessageColor()
  setTimeout(function () {
    $('#updateTabModal').modal('hide')
    $('#modalTitleUpdateTab').text('Update tab')
    store.defaultMessageColor()
  }, store.successTimeout)
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
