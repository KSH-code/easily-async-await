/**
 *
 * @param {Function} cb
 * @example
 *
 * async function () {
 *  console.log(await then(Promise.resolve(199)))
 * }
 * // log 199
 */
module.exports = (cb) => {
  return new Promise((resolve, reject) => {
    cb.then(resolve).catch(reject)
  })
}
