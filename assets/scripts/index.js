'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const tabEvents = require('./tabs/events.js')

$(() => {
  // your JS code goes here
  authEvents.addAuthHandlers()
  tabEvents.addHandlers()
  // Code to reset modal fields to default upon close…
  $('body').on('hidden.bs.modal', '.modal', function () {
    $(this).find('input[type="text"],input[type="email"],input[type="password"],textarea,select').each(function () {
      if (this.defaultValue !== '' || this.value !== this.defaultValue) {
        this.value = this.defaultValue
      } else { this.value = '' }
    })
  })
})
