"use strict";

const axios = require('axios');
const { api_url } = require('../server');
const { h } = require('../hashMe');

const ajax = (url) => {
    const exec = require('child_process').exec;
    return new Promise((resolve) => {
        exec("curl '" + url + "' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Connection: keep-alive' -H 'Cookie: loid=00000000000010u71j.2.1472038288010.Z0FBQUFBQmVacnpGVWVfT1VsQ1l6Z3ZkeEtWamZuTjEtYTFaNVhicTJLMjA0RUhyaDNnSndhZlNrZHIwaFpIOU83VUdaZFJzUzN4dmI1d090cXNRTjJNUFhrc3c3bThaME5HOUdpaEI3RnhHTE8zUFlfS2NwVmJXQUF5ODYxWGdtc0FodUd4alBzM0Y; d2_token=3.645880e2f9e072be0017067f696fff331c25de625b53c360156936ecaf339863.eyJhY2Nlc3NUb2tlbiI6IjYxODc0OTgzLUEweUxid1NuMzZTWFJtaXdHQk53enlfVEM3TSIsImV4cGlyZXMiOiIyMDIwLTExLTA5VDE1OjU5OjE4LjAwMFoiLCJsb2dnZWRPdXQiOmZhbHNlLCJzY29wZXMiOlsiKiIsImVtYWlsIl19; csv=1; edgebucket=A7op8I2cOOzDzXwKm6; reddaid=ZPIZRNGESHOITYAB; recent_srs=t5_mvcq5%2Ct5_2qi2m%2Ct5_vsh00%2Ct5_2reca%2Ct5_y5wrf%2Ct5_3gvav%2Ct5_2qhwg%2Ct5_2r8ot%2Ct5_2tkn0c%2Ct5_2w2vn; __gads=ID=f4b21f53543fb609:T=1582749759:R:S=ALNI_MZgpR2sHN1_8TwzTpYQalff588MLQ; cto_bundle=KtW1lV95SzJwTXdMbFd1MTBIa2lTcjVWc09Va0NxZ2JOTzZtbHFxeCUyRkpqZFJ6ZnB6YWZhY2E5YTBxZXc2SiUyQmZUVCUyQkQ3JTJGQWdUWVJ6M1BnNlE3SmolMkZCSE0lMkZNbFFid2lGJTJCMTBmWTNxVG1lUXZrd2ttMWtTemNodEt6aEUweHQlMkY0NzYyYTdRSlNBVSUyRmdLRCUyRkFtVnhTYWclMkZHanJ3JTNEJTNE; reddit_session=61874983%2C2020-03-08T16%3A02%3A51%2C97f376fb331947ec4ffdd3fec2707eb37a7a23c0; pc=o8; __stripe_mid=3824a167-980e-4b73-9abe-35406e7501e3; token=eyJhY2Nlc3NUb2tlbiI6IjYxODc0OTgzLUE0UlQxOFNoTlNadzFCQkpQc0ZXblo4cGE1dyIsInRva2VuVHlwZSI6ImJlYXJlciIsImV4cGlyZXMiOjE1OTI2ODIyOTY4MzQsInJlZnJlc2hUb2tlbiI6IjYxODc0OTgzLWVKbFptcVdEbllDQjNtMHFRNDA1Wk5fQVR0USIsInNjb3BlIjoiKiJ9.2; over18=true; token_v2=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDc2MjcyMDgsInN1YiI6IjYxODc0OTgzLXd4enBzcFpvSXYtMXlTdWZKVUtRSXh2TWhBTSIsImxvZ2dlZEluIjp0cnVlLCJzY29wZXMiOlsiKiIsImVtYWlsIl19.IFFTOScCcbci8l1SkcTC0f3KmnPzN4-FfzqYPPjagCg; USER=eyJwcmVmcyI6eyJnbG9iYWxUaGVtZSI6IlJFRERJVCIsImNvbGxhcHNlZFRyYXlTZWN0aW9ucyI6eyJmYXZvcml0ZXMiOmZhbHNlLCJtdWx0aXMiOmZhbHNlLCJtb2RlcmF0aW5nIjpmYWxzZSwic3Vic2NyaXB0aW9ucyI6ZmFsc2UsInByb2ZpbGVzIjpmYWxzZX0sIm5pZ2h0bW9kZSI6dHJ1ZSwicnBhbkR1RGlzbWlzc2FsVGltZSI6bnVsbCwidG9wQ29udGVudERpc21pc3NhbFRpbWUiOm51bGwsInRvcENvbnRlbnRUaW1lc0Rpc21pc3NlZCI6MH0sImxhbmd1YWdlIjoiZW4ifQ==; show_announcements=yes; session_tracker=oiagodqbcnbpljpnma.0.1607623866480.Z0FBQUFBQmYwbVM2OWdheEtDLXdxUWl3OHRrdzJZZG9BNXpfM1BjWTVmZlpEeXQwNXZoQWhNNmlEVmE5ZGtrSWJDdGlReHZCZl9LSDdmMlc5TEE5MkFnWl9TaGRkQVRpYjd4U09XcFJaOUpBTkpWOHRHbGF2Ym5ib1Nvd2JERGtVc2QtWWtfejBscnU; session=86c6dabe17623a40614cf312f29c785652617f15gASVSQAAAAAAAABKv2TSX0dB1/Rfa+zQQn2UjAdfY3NyZnRflIwoNTgwZjJjYTcwZGE2YTM4OTMwYmU1YmFmYzQ1MjllMjQwMDE4MGE4ZZRzh5Qu; eu_cookie_v2=1; aimadnet_recentclicks2=t3_hck824' -H 'Upgrade-Insecure-Requests: 1' -H 'Cache-Control: max-age=0' -H 'TE: Trailers'", function(error, stdout, stderr){
            // --proxy http://62.171.132.255:8128
            resolve({"data":stdout}); 
        });
    })
}

const decodeHTMLEntities = (text) => {
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
};

const get_audio = async (url, prefix) => {
    const r = await ajax(url)
    let data = r.data;
    data = data.replace(/\n/g, "");
    var regex = /audio\/mp4(.*?)\<SegmentBase/i;
    var match = regex.exec(data);
    if (match && match.length > 1) {
        regex = /BaseURL\>(.*?)\<\/BaseURL/i;
        match = regex.exec(match[1]);
        if (match && match.length > 1) {
            return prefix + "/" + match[1];
        }
    }
    return null;
};

const get_reddit = async (url) => {
    try {
        url = (url.split("?")[0] + ".json").replace("/.json", ".json");
        const r = await ajax(url);
        let data = JSON.parse(r.data);
        let video = null;
        let audio = null;
        if (data.length > 0) {
            data = data[0].data.children[0].data;
            if ('media' in data && "reddit_video" in data.media) {
                var media = data.media.reddit_video;
                if (!'is_gif' in media || 'is_gif' in media && !media.is_gif) {
                    video = decodeHTMLEntities(media.fallback_url);
                    var regex = /redd.it\/(.*?)\//i;
                    var match = regex.exec(video);
                    if (match && match.length > 1) {
                        audio = await get_audio(media.dash_url, "https://v.redd.it/" + match[1]);
                    }
                    return {
                        success: true,
                        result: {
                            title: data.title,
                            video,
                            audio,
                            download: api_url + '/api/v1/reddit-download?v=' + encodeURIComponent(video) + '&h=' + encodeURIComponent(h(video)) + '&a=' + encodeURIComponent(audio) + '&t=' + encodeURIComponent(data.title),
                            thumb: data.thumbnail
                        }
                    }
                } else {
                    video = decodeHTMLEntities(media.fallback_url);
                    var regex = /redd.it\/(.*?)\//i;

                    return {
                        success: true,
                        result: {
                            title: data.title,
                            video,
                            audio: null,
                            thumb: data.thumbnail
                        }
                    }
                }
            }
        }

        return {
            success: false,
            result: null
        }
    } catch (error) {
        return {
            success: false,
            result: null,
            error: "TechnicalError"
        }
    }
};

// get_reddit("https://www.reddit.com/r/TikTokCringe/comments/hck824/im_hannah_montana/").then((res) => {
//     console.log(res);
// });

module.exports = {
    get_reddit
};