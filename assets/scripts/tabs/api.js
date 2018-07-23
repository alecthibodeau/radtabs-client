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
  // console.log(store.user.id)
  // console.log(store.user.email)
  return $.ajax({
    url: config.apiUrl + '/tabs',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    //, data: JSON.stringify(data)
  })
}

const updateTab = (data, tabId) => {
  // console.log(store.user.id)
  // console.log(store.user.email)
  return $.ajax({
    url: config.apiUrl + '/tabs/' + tabId,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    //, data: JSON.stringify(data)
  })
}

// Added the structure of this new function during Handlebars lesson…
const deleteTab = (tabId) => {
  return $.ajax({
    url: config.apiUrl + '/tabs/' + tabId,
    method: 'DELETE',
    // Auth code from game project…
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
