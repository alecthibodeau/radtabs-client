'use strict'

const config = require('../config')
const store = require('../store')

const getTabs = function () {
  return $.ajax({
    url: config.apiUrl + '/tabs',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newTab = function (data) {
  return $.ajax({
    url: config.apiUrl + '/tabs',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTab = (data, tabId) => {
  return $.ajax({
    url: config.apiUrl + '/tabs/' + tabId,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteTab = (tabId) => {
  return $.ajax({
    url: config.apiUrl + '/tabs/' + tabId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getTabs,
  newTab,
  updateTab,
  deleteTab
}
