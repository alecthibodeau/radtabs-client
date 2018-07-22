'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetTabs = (event) => {
  event.preventDefault()
  api.getTabs()
    .then(ui.getTabsSuccess)
    .catch(ui.failure)
}

const onClearTabs = (event) => {
  event.preventDefault()
  ui.clearTabs()
}

const onDeleteTab = (event) => {
  event.preventDefault()
  // closest is a handlebar method that will look for the closest ul and target the data id
  const tabId = $(event.target).closest('ul').attr('data-id')
  api.deleteTab(tabId)
  // may need refactoring
    .then(() => onGetTabs(event))
    // have list refresh after remove button is being removed
    .catch(ui.failure)
}

const onTestButton = () => {
  console.log('Whee!')
}

const addTabHandlers = () => {
  $('.info-section').hide()
  $('#getTabsButton').on('click', onGetTabs)
  $('#clearTabsButton').on('click', onClearTabs)
  $('.tab-return-content').on('click', '#update-button', onTestButton)
  $('.tab-return-content').on('click', '#delete-button', onDeleteTab)
}

module.exports = {
  addTabHandlers
}
