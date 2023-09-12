"use strict";

const showPopup = () => {
    // if ("lastPopupDate" in window.localStorage) {
    //     var lastDate = new Date();
    //     lastDate.setTime(parseInt(window.localStorage.lastPopupDate) + (15 * 60 * 1000));

    //     if ((new Date()).getTime() > lastDate) {
    //         window.localStorage.setItem("lastPopupDate", (new Date()).getTime());
    //         window.open('https://dooloust.net/4/4681318', '_blank');
    //     } else {
    //         window.open('https://www.geniusdexchange.com/jump/next.php?r=3643267', '_blank');
    //     }
    // } else {
    //     window.localStorage.setItem("lastPopupDate", (new Date()).getTime());
    //     window.open('https://dooloust.net/4/4681318', '_blank');
    // }
}

module.exports = { showPopup };