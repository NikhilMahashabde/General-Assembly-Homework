house_listings = [
  {
    'address': '5 George St, Brisbane',
    'price': 1200000,
    'status': 'sold'
  },
  {
    'address': '30 Forest Drive, Cairns',
    'price': 700000,
    'status': 'for sale'
  },
  {
    'address': '6 Station Street, Bendigo',
    'price': 900000,
    'status': 'for sale'
  },
  {
    'address': '42 Wallaby Way, Sydney',
    'price': 1400000,
    'status': 'for sale'
  },
]

print(len(list(filter(lambda s: (s['status'] == 'for sale'), house_listings))))

print(sorted(house_listings, key = lambda x: x['price'], reverse=True)[0])