'use strict'

const config = require('../config')
// const store = require('../store')

const getTabs = function () {
  return $.ajax({
    url: config.apiUrl + '/tabs'
  })
}

const createTab = function () {
  // console.log(store.user.id)
  // console.log(store.user.email)
  return $.ajax({
    url: config.apiUrl + '/tabs',
    method: 'POST'// ,
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    // data: JSON.stringify(tab)
  })
}

const updateTab = (tabId) => {
  // console.log(store.user.id)
  // console.log(store.user.email)
  return $.ajax({
    url: config.apiUrl + '/tabs/' + tabId,
    method: 'PATCH'// ,
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    // data: JSON.stringify(tab)
  })
}

// Added the structure of this new function during Handlebars lesson…
const deleteTab = (tabId) => {
  return $.ajax({
    url: config.apiUrl + '/tabs/' + tabId,
    method: 'DELETE'
    // Code from game project…
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
  })
}

module.exports = {
  getTabs,
  createTab,
  updateTab,
  deleteTab
}
