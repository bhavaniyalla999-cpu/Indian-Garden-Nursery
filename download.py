import urllib.request
import urllib.error

pages = ['index.html', 'fruit.html', 'indoor.html', 'outdoor.html', 'ornamental.html', 'avenue.html', 'cart.html', 'checkout.html', 'privacy.html', 'orders.html', 'delivery-report.html']

for p in pages:
    url_path = '' if p == 'index.html' else p.replace('.html', '')
    url = f'https://sribhaskarnursery.vercel.app/{url_path}'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        content = urllib.request.urlopen(req).read()
        with open(p, 'wb') as f:
            f.write(content)
        print(f'Downloaded {p}')
    except Exception as e:
        print(f'Failed {p} at {url}: {e}')
