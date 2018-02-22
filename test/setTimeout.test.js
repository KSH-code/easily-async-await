/* global describe, it */
'use strict'

const { checkEqual } = require('easily-expect')
const { setTimeout } = require('../index')

describe('Test await', () => {
  it('1. setTimeout', async () => {
    checkEqual(true, await setTimeout(() => {
      return true
    }, 100), await setTimeout(() => {
      return true
    }, 100))
  })
  it('2. setTimeout', async () => {
    checkEqual(1, await setTimeout(() => {
      return 1
    }, 100), await setTimeout(() => {
      return 1
    }, 100))
  })
})
