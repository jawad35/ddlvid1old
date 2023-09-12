if (typeof window !== "undefined") {
    var bounceKiller = {
        trackScrolling: true,
        scrollingPercentageNumber: 25,
        logInterval: 10,
        trackEvents: true,
        trackMaxTime: true,
        trackMaxTimeSec: 900
    };
    window.scrollTrackEnd = false;
    window.ScrollMatrix = new Array();

    if (typeof window !== "undefined") {
	window._gaq = window._gaq || [];
        function bkEvent(eventCategory, value, obj) {
            if (typeof obj === "undefined") obj = [];
            if (typeof window.ga !== 'undefined') {
                window.ga('send', 'event', eventCategory, "LOG", value, obj);
            }
            if (typeof window._gaq !== 'undefined') {
                window._gaq.push(['_trackEvent', eventCategory, "LOG", value, obj]);
            }
        };

        function TrackingLogTime(a) {
            return a[0] == 50 ? (parseInt(a[1]) + 1) + ":00" : (a[1] || "0") + ":" + (parseInt(a[0]) + 10)
        }

        if (bounceKiller.trackEvents) {
            function startTimeTracking(a) {
                window.intervalObj = window.setInterval(function() {
                    a = TrackingLogTime(a.split(":").reverse());
                    bkEvent("Time", a);
                }, bounceKiller.logInterval * 1000)

                if (bounceKiller.trackMaxTime) {
                    window.trackMaxTimeTimeout = setTimeout(function() {
                        clearInterval(window.intervalObj);
                    }, bounceKiller.trackMaxTimeSec * 1000)
                }
            }
            window.document.addEventListener("DOMContentLoaded", function() { 
                startTimeTracking("00");
            })
        }

        setTimeout(function() {
            if (bounceKiller.trackScrolling) {
                window.Frequency = bounceKiller.scrollingPercentageNumber;
                window.Repentance = 100 / bounceKiller.scrollingPercentageNumber;
                window.ScrollMatrix = new Array();
                for (var ix = 0; ix < window.Repentance; ix++) {
                    window.ScrollMatrix[ix] = [window.Frequency, "false"];
                    window.Frequency = bounceKiller.scrollingPercentageNumber + window.Frequency;
                }
            };

            window.onscroll = function(){
                if (bounceKiller.trackScrolling) {
                    if (!window.scrollTrackEnd) {
                        bkEvent("Scroll", "scrolled")
                        window.scrollTrackEnd = true;
                    }
                }
                if (bounceKiller.trackScrolling) {
                    var body = window.document.body,
                        html = window.document.documentElement;

                    var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                                    html.clientHeight, html.scrollHeight, html.offsetHeight );
                                    
                    for (iz = 0; iz < window.ScrollMatrix.length; iz++) {
                        if ((window.scrollY + window.innerHeight >= documentHeight * window.ScrollMatrix[iz][0] / 100) && (window.ScrollMatrix[iz][1] == "false")) {
                            window.ScrollMatrix[iz][1] = "true";
                            bkEvent("Percentage Page Scroll", window.ScrollMatrix[iz][0] + "%", {
                                nonInteraction: false
                            })
                        }
                    }
                }
            }
        }, 2000)
    }
}

function reset() {
    window.scrollTrackEnd = false;
    window.scrollTrackEnd = false;
    window.Frequency = bounceKiller.scrollingPercentageNumber;
    window.Repentance = 100 / bounceKiller.scrollingPercentageNumber;
    window.ScrollMatrix = new Array();
    for (var ix = 0; ix < window.Repentance; ix++) {
        window.ScrollMatrix[ix] = [window.Frequency, "false"];
        window.Frequency = bounceKiller.scrollingPercentageNumber + window.Frequency;
    }
    if (bounceKiller.trackEvents) {
        if ("intervalObj" in window) {
            clearInterval(window.intervalObj);
            clearTimeout(window.trackMaxTimeTimeout);
            startTimeTracking("00");        
        }
    }
}

module.exports = {
    reset
}
