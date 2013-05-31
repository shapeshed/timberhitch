var os = require('os');

module.exports = function(component) {

  var key;

  if (component) {

    key = "[" + component + ":" + os.hostname() + ":" + process.pid + "] ";

  } else {

    key = "[" + os.hostname() + ":" + process.pid + "] ";
  }

  return key;

};
