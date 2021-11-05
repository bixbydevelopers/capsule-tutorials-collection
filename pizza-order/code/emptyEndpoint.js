var console = require('console')
module.exports.function = function emptyEndpoint(topping) {
  console.log ("Toppings = " + topping)
  return topping;
}
