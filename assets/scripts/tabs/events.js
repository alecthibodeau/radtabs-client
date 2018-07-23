'use strict'

const getFormFields = require('../../../lib/get-form-fields')

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

// $('#new-tab').reset()

const onNewTab = (event) => {
  $('.modal-field').find('input').val('')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newTab(data)
    .then(ui.newTabSuccess)
    .catch(ui.newTabFailure)
}

const onUpdateTab = (event) => {
  $('.modal-field').find('input').val('')
  // console.log('Update Tab function starts')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateTab(data)
    .then(ui.updateTabSuccess)
    .catch(ui.updateTabFailure)
}

const onDeleteTab = (event) => {
  console.log('Delete Tab function starts')
  event.preventDefault()
  // closest is a handlebar method that will look for the closest ul and target the data id
  const tabId = $(event.target).closest('tr').attr('data-id')
  api.deleteTab(tabId)
    // may need refactoring
    .then(() => onGetTabs(event))
    // have list refresh after remove button is being removed
    .catch(ui.failure)
}

const onTestButton = () => {
  console.log('Launch update modal')
}

const addTabHandlers = () => {
  $('.info-section').hide()
  $('.tab-nav').hide()
  $('#getTabsButton').on('click', onGetTabs)
  $('#clearTabsButton').on('click', onClearTabs)
  $('#new-tab').on('submit', onNewTab)
  $('#update-tab').on('submit', onUpdateTab)
  $('.tab-return-content').on('click', '#update-button', onTestButton)
  $('.tab-return-content').on('click', '#delete-button', onDeleteTab)
}

module.exports = {
  addTabHandlers
}
