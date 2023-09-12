"use strict";

module.exports = {
    h: (str) => {
        const md5 = require('md5');
        let hurl = str;
        hurl = hurl.replace("https://", "");
        hurl = hurl.replace("http://", "");
        let hsep = '00AA00';
        let hpend = str;
        let newh = "";
        newh = newh + md5(hurl);
        newh = newh + hsep;
        newh = newh + hpend.length;
        newh = newh.toLowerCase();
        newh = md5(newh);
        return newh;
    }
}