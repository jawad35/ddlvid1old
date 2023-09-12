import requests

cookies = {
    'VISITOR_INFO1_LIVE': 'z3J-tzCMVcM',
    '__Secure-3PSID': '4QduDFITlz1mdDIz5V0-khMVPM6u5ns_gGkcFj-b2V9I1zMgGEUIVSFmbWW3Gy13YROjqg.',
    '__Secure-3PAPISID': 'DdSoikzd3ePxscFT/Afx3ueKsvhAhtkKdr',
    'PREF': 'f6=40000400&al=en+fr+ar-MA&f5=30030',
    '_ga': 'GA1.2.930716832.1596102468',
    '__Secure-3PSIDCC': 'AJi4QfEwvzEZIySOMkshLC6zArqdEHlzzLizva4paVlQWt8-Fm5yONXLDiD62lcATMDsa_SPiyIF',
    'SID': '4QduDFITlz1mdDIz5V0-khMVPM6u5ns_gGkcFj-b2V9I1zMgyoQzr9IKnswILQHPX47gig.',
    'HSID': 'ALnJcHSRY5lzTsmof',
    'SSID': 'ALzwIH8LUe0C1qAJQ',
    'APISID': 'C44m6yXRawXDqG2c/AxjdV3GxFN_lmdKsE',
    'SAPISID': 'DdSoikzd3ePxscFT/Afx3ueKsvhAhtkKdr',
    'LOGIN_INFO': 'AFmmF2swRAIgE9iuSARY-XESRaabY7v5jllao-6BRjKfxa2INVntqIQCIF37oEm---SknOvsvtmqznzmXplpChE35DNw3UOKD2hH:QUQ3MjNmek5LbHdfOFRvOUdOQU1rWVdrWlN6aEtmSTV1eHh1VWZTSFpfRmt5YUtaRUMxdkQxb0ZNVFB3X29kd04xUE1UOWp1aTVvSnVITVhwd0Z5a25ZY0dLV0N3MWd4djVYcjkwLWtmMVd5LW0wc2pZTEhpNlhxeVdSMkwwZnNTYmhhV055Y09VaWpzaHZUQ1QxVGo4VGZJRGcyR0JBN2Vhd01FdENXdzNJV3drX1dPVEY5bjFz',
    'SIDCC': 'AJi4QfHhE0e3-Ov_HYDtc6coXqoQ07t0PjHMRUg6MQBG5ZPSHVPgSYalD4Hs4YtBsKfdJMHzsSc',
    'YSC': 'EdEPO2dnenM',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'TE': 'Trailers',
}

params = (
    ('v', 'ttWQK5VXskA'),
    ('ab_channel', 'D12VEVO'),
)

response = requests.get('https://www.youtube.com/watch', headers=headers, params=params, cookies=cookies)

#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.get('https://www.youtube.com/watch?v=ttWQK5VXskA&ab_channel=D12VEVO', headers=headers, cookies=cookies)

print(response.text)
