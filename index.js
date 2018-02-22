'use strict'

module.exports = {
  setTimeout (cb, time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(cb())
      }, time)
    })
  }
}
