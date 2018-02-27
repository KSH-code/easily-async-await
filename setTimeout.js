/**
 *
 * @param {Function} cb
 * @param {Number} time - ms
 * @example
 *
 * async function () {
 *  console.log(await then(Promise.resolve(199)))
 * }
 * // log 199
 */
module.exports = (cb, time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cb())
    }, time)
  })
}
