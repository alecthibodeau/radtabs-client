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

const onNewTab = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $('.modal-field').on('hidden.bs.modal', function () {
  //   $(this).find('form')[0].reset()
  // })
  api.newTab(data)
    .then(ui.newTabSuccess(data))
    .then(getTabs)
    .catch(ui.newTabFailure)
}

const saveTab = (event) => {
  store.tab = {
    tab_id: $(event.target).closest('tr').attr('data-id'),
    date: $(event.target).closest('tr').attr('data-date'),
    project_name: $(event.target).closest('tr').attr('data-project_name'),
    task: $(event.target).closest('tr').attr('data-task'),
    time_spent: $(event.target).closest('tr').attr('data-time_spent'),
    notes: $(event.target).closest('tr').attr('data-notes')
  }
  // $('#modal-field-date').val('input', `${store.tab.date}`) // to reset modal field
  // $('#modal-field-project-name').val('input', `${store.tab.project_name}`) // to reset modal field
  // $('#modal-field-task').val('input', `${store.tab.task}`) // to reset modal field
  // $('#modal-field-date-time-spent').val('input', `${store.tab.time_spent}`) // to reset modal field
  // $('#modal-field-notes').val('input', `${store.tab.notes}`) // to reset modal field

  console.log(`tab id from Object is ${store.tab.tab_id}`)
  console.log(`tab date from Object is ${store.tab.date}`)
  console.log(`tab project from Object is ${store.tab.project_name}`)
  console.log(`tab task from Object is ${store.tab.task}`)
  console.log(`tab minutes from Object is ${store.tab.time_spent}`)
  console.log(`tab notes from Object is ${store.tab.notes}`)
}

const onUpdateTab = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateTab(data, store.tab.tab_id)
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

const addTabHandlers = () => {
  $('.info-section').hide()
  $('.tab-nav').hide()
  $('#getTabsButton').on('click', onGetTabs)
  $('#clearTabsButton').on('click', onClearTabs)
  $('#new-tab').on('submit', onNewTab)
  $('#update-tab').on('submit', onUpdateTab)
  $('.tab-return-content').on('click', '#update-button', saveTab)
  $('.tab-return-content').on('click', '#delete-button', onDeleteTab)
}

module.exports = {
  addTabHandlers
}
