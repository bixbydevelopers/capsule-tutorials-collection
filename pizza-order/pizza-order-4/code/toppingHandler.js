var console = require('console')
module.exports.function = function toppingHandler(topping, unknown, toppingStucture) {
  //console.log("toppingStructure = " + JSON.stringify(toppingStucture))

  if (toppingStucture[0]) {
    let keys = Object.keys(toppingStucture[0])
    keys.forEach((key, index) => {
      //console.log(key + ": " + toppingStucture[0][key]);

      if (toppingStucture[0][key]) {

        if (key != "$type") {
          // replace 0 delimiter with space
          let topFormat = key.replace("0", " ")
          topping.push(topFormat)
        }
      }

    });
  } else {
    //console.log ("topping = " + JSON.stringify(topping))
  }

  return {
    "topping": topping,
    "unknown": unknown,
    "toppingStructure": toppingStucture
  }
}
