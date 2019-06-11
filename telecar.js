+(function (factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function (scope) {
    'use strict';

    console.log("Your browser " + ("WebSocket" in window) ? "" : "does not " + " supports WebSocket!");

    var proto;
    var Module = scope.Module;

    function telecar(address) {
        Module.call(this);
        
        var tmp = new WebSocket(address); // "ws://192.168.30.139"

        tmp.onopen = function () {
            console.log("opened");
            window.setTimeout(function () {
                console.log("send "), tmp.send("N");
            }, 1 * 1000);
            window.setTimeout(function () {
                console.log("send "), tmp.send("S");
            }, 2 * 1000);
        };

        tmp.onmessage = function (evt) {
            var received_msg = evt.data;
            console.log("recv", received_msg);
        };

        tmp.onclose = function () {
            // close websocket
            console.log("closed");
            alive = false;
        };

        this.ws = tmp;
    }

    telecar.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: telecar
        }
    });

    proto.move = function (arrow) {
        console.log("send ");
        if(this.ws.readyState == 1) {
            this.ws.send(arrow);
        }
    }

    scope.module.telecar = telecar;

}));

function unit_test() {
    var ts = new webduino.module.telecar("ws://192.168.30.139");
    window.setTimeout(function () {
        ts.move('N');
    }, 5 * 1000);
}

// unit_test();
