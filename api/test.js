const axios = require("axios");

const headers = {
    'Host': 'api16-normal-c-alisg.tiktokv.com',
    'Proxy-Connection': 'keep-alive',
    'sdk-version': 1,
    'x-tt-trace-id': '00-7c2d12e0105cabeca9bb0546059904d1-7c2d12e0105cabec-01',
    'User-Agent': 'com.zhiliaoapp.musically/2021407040 (Linux; U; Android 9; en_US; INE-LX1r; Build/HUAWEIINE-LX1r; Cronet/77.0.3844.0)',
    'Accept-Encoding': 'gzip, deflate',
    'X-Khronos': '1604277275',
    'X-Gorgon': '0404b02000100349b3c2be1536c20ba418e9ec3fb9ff5e5c8171',
};

const signURL = async (url) => {
    const r = await axios.post("https://ddlvid.com/api/tiktok-gorgon/generate", {
        url,
        headers
    })
    console.log({
        url,
        headers: JSON.stringify(headers)
    })
    return r.data;
};

const test = async () => {
    const url = "http://api16-normal-c-alisg.tiktokv.com/aweme/v1/aweme/detail/?aweme_id=6860470104589602053&origin_type&manifest_version_code=2021407040&_rticket=1604106129751&current_region=MA&app_language=en&app_type=normal&iid=6889577048051992325&channel=googleplay&device_type=INE-LX1r&language=en&locale=en&resolution=720*1418&openudid=ee0b7194de10154e&update_version_code=2021407040&ac2=wifi&sys_region=US&os_api=28&uoo=0&is_my_cn=0&timezone_name=Africa%2FCasablanca&dpi=320&residence=MA&carrier_region=MA&ac=wifi&device_id=6677691086238205445&pass-route=1&mcc_mnc=60400&os_version=9&timezone_offset=0&version_code=140704&carrier_region_v2=604&app_name=musical_ly&ab_version=14.7.4&version_name=14.7.4&device_brand=HUAWEI&op_region=MA&ssmix=a&pass-region=1&device_platform=android&build_number=14.7.4&region=US&aid=1233&ts=1604106130";
    const tokens = await signURL(url);
    console.log(tokens)
    var new_headers = headers;
    if (tokens["X-Gorgon"]) {
        new_headers["X-Gorgon"] = tokens["X-Gorgon"];
        new_headers["X-Khronos"] = tokens["X-Khronos"];
    }
    console.log(new_headers)
    const r = await axios.get(url, {
        headers: new_headers
    });

    console.log(r.data);

}

test();
