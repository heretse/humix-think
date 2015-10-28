var apiRoutes = require('express').Router(),
    devices = require('./devices');


function init(adminApp) {
    // Devices
    apiRoutes.post  ('/registerDevice', devices.register);
    apiRoutes.delete('/devices/:senseId', devices.unregister);
    apiRoutes.get   ('/devices', devices.getDeviceList);
    apiRoutes.get   ('/devices/:senseId', devices.getDevice);

    adminApp.use('/api', apiRoutes);
}

module.exports = {
    init: init
};
