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
  api.deleteTab(store.tab.tab_id)
    .then(ui.deleteTabSuccess)
    .then(() => onGetTabs(event))
    .catch(ui.failure)
}

const addTabHandlers = () => {
  $('.tab-return-content').on('click', saveTab).on('mouseover', '.info-td', (event) => {
    $(this).css('cursor', 'pointer')
  })
  $('#showHideTabsButton').click((event) => {
    store.showHideCounter % 2 === 0 ? onGetTabs(event) : onClearTabs(event)
    store.showHideCounter++
  })
  $('#showHideTabsButton').mouseover(() => { $('#showHideTabsButton').css('background-color', '#fff200') })
  $('#showHideTabsButton').mouseout(() => { $('#showHideTabsButton').css('background-color', '#ffe664') })
  $('#showHideTabsButton').click(() => { $('#showHideTabsButton').css('background-color', '##fff200') })
  $('.info-section').hide()
  $('.nav-bar').hide()
  $('#new-tab').on('submit', onNewTab)
  $('#update-tab').on('submit', onUpdateTab)
  $('#delete-tab').on('submit', onDeleteTab)
}

module.exports = {
  addTabHandlers
}
