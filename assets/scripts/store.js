'use strict'

const store = {
  successTimeout: 1500,
  failureTimeout: 3000,
  successMessageColor: () => {
    $('.modal-title').addClass('success-message')
  },
  errorMessageColor: () => {
    $('.modal-title').addClass('error-message')
  },
  defaultMessageColor: () => {
    $('.modal-title').removeClass('success-message').removeClass('error-message')
  }
}

module.exports = store
