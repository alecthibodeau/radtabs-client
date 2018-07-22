'use strict'

const config = require('../config')
// const store = require('../store')

const getTabs = function () {
  return $.ajax({
    url: config.apiUrl + '/tabs'
  })
}

// Add this new function…
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
  deleteTab
}
