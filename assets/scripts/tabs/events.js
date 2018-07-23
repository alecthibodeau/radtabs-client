'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api.js')
const ui = require('./ui.js')

const store = require('../store')

const getTabs = () => {
  api.getTabs()
    .then(ui.getTabsSuccess)
    .catch(ui.failure)
}

const onGetTabs = (event) => {
  event.preventDefault()
  getTabs()
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
    .then(ui.newTabSuccess(data))
    .then(getTabs)
    .catch(ui.newTabFailure)
}

const saveTabId = (event) => {
  store.tabId = $(event.target).closest('tr').attr('data-id')
  console.log(`tabId is ${store.tabId}`)
}

// Arjun's recommendation…
// const saveTab = (event) => {
//   store.tab = {
//     tab_id: $(event.target).closest('tr').attr('data-id'),
//     date:
//     project_name:
//     task:
//     time_spent:
//     notes:
//   }
//   store.tabId =
//   console.log(`tabId is ${store.tabId}`)
// }

const onUpdateTab = (event) => {
  console.log(`tabId is: ${store.tabId}`)
  $('.modal-field').find('input').val('')
  // console.log('Update Tab function starts')
  event.preventDefault()
  const data = getFormFields(event.target)
  // const tabId = $(event.target).closest('tr').attr('data-id')
  api.updateTab(data, store.tabId)
    .then(ui.updateTabSuccess)
    .then(getTabs)
    .catch(ui.updateTabFailure)
}

const onDeleteTab = (event) => {
  console.log('Delete Tab function starts')
  event.preventDefault()
  // closest is a handlebar method that will look for the closest ul and target the data id
  const tabId = $(event.target).closest('tr').attr('data-id')
  console.log(`tabId is: ${tabId}`)
  api.deleteTab(tabId)
    // may need refactoring
    .then(() => onGetTabs(event))
    // have list refresh after remove button is being removed
    .catch(ui.failure)
}

// const onTestButton = () => {
//   console.log('Launch update modal')
// }

const addTabHandlers = () => {
  $('.info-section').hide()
  $('.tab-nav').hide()
  $('#getTabsButton').on('click', onGetTabs)
  $('#clearTabsButton').on('click', onClearTabs)
  $('#new-tab').on('submit', onNewTab)
  $('#update-tab').on('submit', onUpdateTab)
  $('.tab-return-content').on('click', '#update-button', saveTabId)
  // $('.tab-return-content').on('click', '#update-button', onTestButton)
  $('.tab-return-content').on('click', '#delete-button', onDeleteTab)
}

module.exports = {
  addTabHandlers
}
