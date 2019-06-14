"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
exports.default = (function (defaultPort) {
    var checkPort = function (port) {
        return new Promise((function (resolve) {
            if (port - defaultPort >= 1000)
                return resolve(-1);
            var socket = new net.Socket();
            var onError = function () {
                socket.destroy();
                resolve(port);
            };
            socket.setTimeout(1000);
            socket.once('error', onError);
            socket.once('timeout', onError);
            socket.connect(port, function () {
                socket.end();
                resolve(checkPort(port + 1));
            });
        }));
    };
    return checkPort(defaultPort);
});
