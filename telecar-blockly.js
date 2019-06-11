
+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(window, window.webduino);
  } else {
    module.exports = factory;
  }
}(function (scope, webduino) {

  'use strict';

  scope.telecar_create = function (address) {
    return "new webduino.module.telecar('{0}')".format(address);
  }

  scope.telecar_move = function (telecar, allow) {
    return "{0}.move('{1}')".format(telecar, allow);
  }

  scope.telecar_unit_test = function () {

    var code = "";
    
    console.log(code);
    // eval(code);
    return code;
  }

}));

// unit_test();

