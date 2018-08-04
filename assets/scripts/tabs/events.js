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
  api.newTab(data)
    .then(ui.newTabSuccess(data))
    .then(getTabs)
    .catch(ui.failure)
}

const saveTab = (event) => {
  // Retrieve table row data on launch of Update Tab modal…
  store.tab = {
    tab_id: $(event.target).closest('tr').attr('data-id'),
    date: $(event.target).closest('tr').attr('data-date'),
    project_name: $(event.target).closest('tr').attr('data-project_name'),
    task: $(event.target).closest('tr').attr('data-task'),
    time_spent: $(event.target).closest('tr').attr('data-time_spent'),
    notes: $(event.target).closest('tr').attr('data-notes')
  }
  // console.log(`tab id from Object is ${store.tab.tab_id}`)
  // console.log(`tab date from Object is ${store.tab.date}`)
  // console.log(`tab project from Object is ${store.tab.project_name}`)
  // console.log(`tab task from Object is ${store.tab.task}`)
  // console.log(`tab minutes from Object is ${store.tab.time_spent}`)
  // console.log(`tab notes from Object is ${store.tab.notes}`)
  fillField()
}

const fillField = () => {
  // Reset form fields on launch of Update Tab modal…
  $('#update-tab').show()
  $('#modal-field-date').val(store.tab.date)
  $('#modal-field-project-name').val(store.tab.project_name)
  $('#modal-field-task').val(store.tab.task)
  $('#modal-field-time-spent').val(store.tab.time_spent)
  $('#modal-field-notes').val(store.tab.notes)
}

const onUpdateTab = (event) => {
  // On clicking submit button after updating tab…
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateTab(data, store.tab.tab_id)
    .then(ui.updateTabSuccess)
    .then(getTabs)
    .catch(ui.failure)
}

const onDeleteTab = (event) => {
  event.preventDefault()
  // closest is a handlebar method that will look for the closest tr and target the data-id
  const tabId = $(event.target).closest('tr').attr('data-id')
  api.deleteTab(tabId)
    .then(() => onGetTabs(event))
    .catch(ui.failure)
}

const addTabHandlers = () => {
  $('.tab-return-content').on('mouseover', '.info-td', function (event) {
    // console.log('Hi')
    // $(this).css('background-color', 'red')
    saveTab(event)
    $(this).css('cursor', 'pointer')
    // $('#updateTabModal').show()
    // $('#updateTabModal').show()
  })
  // $('.tab-return-content').on('mouseover', '.info-td', console.log('Hi'))
  $('.info-section').hide()
  $('.nav-bar').hide()
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
