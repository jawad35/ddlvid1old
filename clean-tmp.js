"use strict";

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

var uploadsDir = __dirname + '/tmp';

fs.readdir(uploadsDir, function(err, files) {
    files.forEach(function(file) {
        fs.stat(path.join(uploadsDir, file), function(err, stat) {
            var endTime, now;
            if (err) {
                return console.error(err);
            }
            now = new Date().getTime();
            endTime = new Date(stat.ctime).getTime() + 600000;
            if (now > endTime) {
                return rimraf(path.join(uploadsDir, file), function(err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('successfully deleted');
                });
            }
        });
    });
});