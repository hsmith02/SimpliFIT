// Stay ES5 which is required by Grunt.
var os = require('os');

function _getServerIP() {
    var interfaces = os.networkInterfaces();
    var addresses = [];
    var k, k2;

    for (k in interfaces) {
        for (k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }

    return addresses[0];
}

let serverIP = _getServerIP();
const temp = serverIP.split('.');

if (temp[0] === '192' && temp[1] === '168') {
    serverIP = 'localhost'
}

module.exports = {
    host: serverIP,
    port: 8080
};

