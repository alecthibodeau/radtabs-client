'use strict'

const config = require('../config')

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
  })
}

module.exports = {
  getTabs,
  deleteTab
}
