"use strict";

const tr = require('tor-request');
tr.TorControlPort.password = 'aimadooo';

tr.renewTorSession(() => {
    console.log("Tor Reseted!")
});