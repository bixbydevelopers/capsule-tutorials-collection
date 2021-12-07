var console = require('console')
module.exports.function = function toppingHandler(topping,unknown) {
  console.log ("topping = " + topping + " unkown = " + unknown)
  return {
    "topping": topping,
    "unknown": unknown
  }
}
