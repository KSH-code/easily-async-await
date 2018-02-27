/* global describe, it */
'use strict'

const { checkEqual, checkType } = require('easily-expect')
const { then } = require('../index')

describe('Test then', () => {
  it('1. Promise resolve', async () => {
    checkEqual(true, await then(Promise.resolve(true)))
  })
  it('2. Promise reject', async () => {
    let isError = false
    try {
      await then(Promise.reject(new Error()))
    } catch (err) {
      isError = err
    }
    checkType('object', isError)
  })
})
