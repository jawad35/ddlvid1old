"use strict";

import { useState, useEffect } from 'react';

const AD2HS = () => {

    const [hideBanner, setHideBanner] = useState(false);
    
    var deferredPrompt;

    const showAddToHomeScreen = () => {
        var a2hsBtn = window.document.querySelector(".ad2hs-banner");
        if (a2hsBtn) {
            a2hsBtn.classList.add("show");
            var btn = a2hsBtn.querySelector("button");
            if (btn) addEventListener("click", addToHomeScreen);
        }
    };

    const addToHomeScreen = () => {
        var a2hsBtn = window.document.querySelector(".ad2hs-banner");
        a2hsBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function(choiceResult) {
            if (choiceResult.outcome === 'accepted') {
                window._gaq.push(['_trackEvent', 'addedToHomeScreen', 'true']);
            }
            deferredPrompt = null;
        });
    }

    useEffect(() => {
        if (typeof window === 'undefined' || typeof window !== 'undefined' && 'hideAD2HS' in window.localStorage) {
            setHideBanner(true);
        }

        if (typeof window !== 'undefined' && window.innerWidth <= 1050) {
            window.addEventListener('beforeinstallprompt', function (e) {
                e.preventDefault();
                deferredPrompt = e;
                showAddToHomeScreen();
            });
        }
    }, [])

    if (hideBanner) {
        return (
            <div className="ad2hs-banner">
                <button className="btn">Install DDLVid Web App for Fast Download</button>
            </div>
        )
    }

    return null;
}

export default AD2HS
