import requests
import os

dir = os.path.dirname(__file__)

url = "https://api.proxyscrape.com/v2/account/datacenter_shared/proxy-list?auth=1fzqw51e5hpbkxnxmw6z&type=getproxies&country[]=all&protocol=http&format=normal"

r = requests.get(url).text.split("\n")

proxies = []
working_proxies = []

for x in r:
    if x != "":
        working_proxies.append("http://" + x.strip())

if len(working_proxies) > 0:
    open(os.path.join(dir, "proxy.txt"), 'w').close()
    with open(os.path.join(dir, "proxy.txt"), "a") as f:
        for x in working_proxies:
            f.write(x + "\n")

else:
    print("no working proxies found!")

