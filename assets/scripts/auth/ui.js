'use strict'

const store = require('../store')
// const gameEvents = require('../game/ui.js')
// const boardEvents = require('../game/events.js')

const signUpSuccess = function (data) {
  $('#modalTitleSignUp').text('Signed up successfully').css('color', '#9ac479')
  $('#sign-up').slideToggle(200)
  setTimeout(function () {
    $('#signUpModal').modal('hide')
    $('#modalTitleSignUp').text('Sign up').css('color', '#fca778')
  }, store.successTimeout)
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#modalTitleSignUp').text('Error on sign up. Try again').css('color', '#f27089')
  setTimeout(function () {
    // $('#signUpModal').modal('hide')
    $('#modalTitleSignUp').text('Sign up').css('color', '#fca778')
    // $('#sign-up').show()
  }, store.failureTimeout)
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#modalTitleSignIn').text('Signed in successfully').css('color', '#9ac479')
  $('#sign-in').slideToggle(200)
  $('#nav-sign-up').hide()
  $('#nav-sign-in').hide()
  $('.tab-nav').show()
  setTimeout(function () {
    $('#signInModal').modal('hide')
    $('#modalTitleSignIn').text('Sign in').css('color', '#fca778')
    $('#sign-in').show()
  }, store.successTimeout)
  // console.log('signInSuccess ran. Data is :', data)
  // store is an empty object: store = {}. We'll fill it with information. See store.js
  store.user = data.user
}

const signInFailure = function (error) {
  $('#modalTitleSignIn').text('Error on sign in. Try again.').css('color', '#f27089')
  setTimeout(function () {
    // $('#signInModal').modal('hide')
    $('#modalTitleSignIn').text('Sign in').css('color', '#fca778')
    // $('#sign-in').show()
  }, store.failureTimeout)
  console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#modalTitleChangePassword').text('Changed password successfully').css('color', '#9ac479')
  $('#change-password').slideToggle(200)
  setTimeout(function () {
    $('#changePasswordModal').modal('hide')
    $('#modalTitleChangePassword').text('Change password').css('color', '#fca778')
    $('#change-password').show()
  }, store.successTimeout)
  // console.log('changePasswordSuccess ran and nothing was returned :', data)
}

const changePasswordFailure = function (error) {
  $('#modalTitleChangePassword').text('Error on change password. Try again.').css('color', '#f27089')
  setTimeout(function () {
    // $('#changePasswordModal').modal('hide')
    $('#modalTitleChangePassword').text('Change password').css('color', '#fca778')
    // $('#change-password').show(1)
  }, store.failureTimeout)
  console.log('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = function (animateGameBoard, onClickResetSession, onClickCell) {
  // const preGame = true
  // boardEvents.animateGameBoard(preGame)
  // gameEvents.onClickResetSession()
  $('#modalTitleSignOut').text('Signed out successfully').css('color', '#9ac479')
  $('#nav-sign-up').show()
  $('#nav-sign-in').show()
  $('.info-section').hide()
  $('.tab-nav').hide()

  setTimeout(function () {
    $('#signOutModal').modal('hide')
    $('#modalTitleSignOut').text('Sign out').css('color', '#fca778')
  }, store.successTimeout)
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#modalTitleSignOut').text('Error on sign out. Try again').css('color', '#f27089')
  setTimeout(function () {
    $('#signOutModal').modal('hide')
    $('#modalTitleSignOut').text('Sign out').css('color', '#fca778')
  }, store.failureTimeout)
  console.log('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
