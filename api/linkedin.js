"use strict";

const axios = require('axios');

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

const get_linkedin = async (url) => {
    try {
        const r = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.5",
                "Upgrade-Insecure-Requests": "1",
                "Cache-Control": "max-age=0",
                'Cookie': 'li_sugr=1b70ce87-9f6e-4db4-a386-ca2833829472; UserMatchHistory=AQLb4Ku_TCpXnwAAAXNbFwxuBvL7STUWVXnHJnm4-6eaxV5c3ZwcQ5-KsaOZ1OKfHZj7cx-ahTkv0rMP-07Yva1HWLbwi2dwnqNEBY4CCdXGVd_ikYkqx_d_J8KcwghVxFbgbFTEixadVovSevHh6dwEkt2KS8tdobT-t6_v7IQj49ChDLAY2VtlFadmRRSCj9sEB_t-bAq8jikefo0uGaHfX9XubRgkkPug2kaJUsdxzNxJBzLawFEfG-zgPmwvplc; bcookie="v=2&264b26e8-be86-4673-8e99-5fffcd1df58a"; bscookie="v=1&20200226173326d802e544-c627-4584-8d94-4920af6953d3AQGCVEczT8RJu9XdJSqKh4TboBVEIW2Z"; lissc=1; JSESSIONID="ajax:8872198342779313070"; _ga=GA1.2.1061946970.1583268395; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-408604571%7CMCIDTS%7C18461%7CMCMID%7C48364095138320047643440428480305023949%7CMCAAMLH-1595565907%7C6%7CMCAAMB-1595565907%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1594968307s%7CNONE%7CvVersion%7C4.6.0%7CMCCIDH%7C-828328229; sl="v=1&lhQxx"; li_at=AQEDAQXbVHwCUIKQAAABcKIm2s8AAAFzeveBLFYAJeZNxGQd4ySLDlLFsoi1C4f5xHUXIm-Vuw_VNLz5JAvN11Nxa1YaJby6VELLCCpCX-Ntprb5NEW3-tjB_oWJzWreJi0dNMnSgztmg5E2DGZGFz-h; liap=true; li_oatml=AQF-UAsIPdVb2AAAAXNW6v1ZbdaFddDGyD6HGEA00TbNpuMm3BKD7_3y5r15UDl0oi8_oHpyZuVefHlLkRsyg578I24Nxm4a; VID=V_2020_03_29_01_1509; UserMatchHistory=AQIjXQUYLWxTIgAAAXNbGX31tluvdRr8-F9MRM6_NXtmZdH3RwmHaVUsHAlNrgTxzPYUVMLqLegi1J1ecLyXptxlbs5qfVkl3unywF3R_xuESaTUic5xHVEuZesMb9HthSrEpRe9JWaf8l2sbuwU_-gi7MFRscxkXDMp46OBpInaGrGYZhrL4rIPGlhaiOfCeQNoaEj0oQRS8NT9FQGnnZCnNilSsbTFedtOnTNEsHdc0sI6P6oKy5HEZOQEQNG-3bvXjnCkOWcnU4emYirVP8RYNLy7JYBvqSo; _guid=2d724f94-2324-40fc-ba24-d3b27b130360; lang=v=2&lang=fr-fr; lidc="b=VB92:s=V:r=V:g=2616:u=2:i=1594961268:t=1594976450:v=1:sig=AQGtGT54gVzkzKqWe1v_wGSwKwTNhqN8"; _gat=1; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; aam_uuid=48867749313550948713418782170402338822'
            }
        })

        let data = r.data;
        data = decodeHTMLEntities(data.replace(/\n/g, " "));
        let title = "LinkedIn Video";
        let thumb = null;
        let video = null;
        let title_arr = data.match(/<title>(.*)<\/title>/);
        if (title_arr && title_arr.length > 1) {
            title = title_arr[1];
        }
        
        let video_arr = data.match(/\"https\:\/\/dms.licdn.com\/playlist(.*?)\"/);
        if (video_arr && video_arr.length > 1) {
            video = "https://dms.licdn.com/playlist" + video_arr[1].replace(/&#61;/g, "=");
        }

        let image_arr = data.match(/img data\-delayed\-url\=\"(.*?)\"/);
        if (image_arr && image_arr.length > 1) {
            thumb = image_arr[1];
        }
        
        if (video && video !== "") {
            return {
                success: true,
                result: {
                    title,
                    video,
                    thumb
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

module.exports = {
    get_linkedin
};