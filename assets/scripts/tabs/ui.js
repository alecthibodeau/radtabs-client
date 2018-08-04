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
  $('#modalTitleNewTab').text('New tab created')
  $('#new-tab').slideToggle(200)
  store.successMessageColor()
  setTimeout(function () {
    $('#newTabModal').modal('hide')
    $('#modalTitleNewTab').text('New tab')
    store.defaultMessageColor()
    $('#new-tab').show()
  }, store.successTimeout)
}

// const updateTabSuccess = (data) => {
//   $('#modalTitleModifyTab').text('Tab updated')
//
//   $('#modify-tab').slideToggle(200)
//   store.successMessageColor()
//   setTimeout(function () {
//     $('#updateTabModal').modal('hide')
//     $('#modalTitleUpdateTab').text('Modify tab')
//     store.defaultMessageColor()
//     $('#update-tab').show()
//   }, store.successTimeout)
// }

const successfulModification = () => {
  store.successMessageColor()
  $('#update-tab').slideToggle(200)
  $('#delete-tab').slideToggle(200)
  setTimeout(function () {
    $('#modifyTabModal').modal('hide')
    $('#modalTitleModifyTab').text('Modify tab')
    store.defaultMessageColor()
    $('#modify-tab').show()
    $('#delete-tab').show()
  }, store.successTimeout)
}

const updateTabSuccess = (data) => {
  $('#modalTitleModifyTab').text('Tab updated')
  successfulModification()
}

const deleteTabSuccess = (data) => {
  $('#modalTitleModifyTab').text('Tab deleted')
  successfulModification()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  newTabSuccess,
  updateTabSuccess,
  deleteTabSuccess,
  getTabsSuccess,
  clearTabs,
  failure
}
