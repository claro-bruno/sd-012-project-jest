// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const https = require('https');

const url = 'https://randomuser.me/api/';

const fetchURL = () => new Promise(function (resolve, reject) {
  https.get(url, (res) => {
    res.setEncoding('utf8');
    let userInfo = '';
    res.on('data', (data) => {
      userInfo += data;
    });
    res.on('error', reject);
    res.on('close', () => resolve(JSON.parse(userInfo).results[0]));
  });
});

const data = {
  gender: 'male',
  name: { title: 'Ms', first: 'Antônio', last: 'Britto' },
  location: {
    street: { number: 1299, name: 'Rochestown Road' },
    city: 'Birr',
    state: 'Wicklow',
    country: 'Brazil',
    postcode: 16223,
    coordinates: { latitude: '26.2451', longitude: '45.2995' },
    timezone: {
      offset: '+5:30',
      description: 'Bombay, Calcutta, Madras, New Delhi',
    },
  },
  email: 'tunico@bol.com.br',
  login: {
    uuid: '45db2b1f-1c9a-4a80-9572-e46614f86c30',
    username: 'tunicao123',
    password: '1234567890',
    salt: 'XKOOGc2x',
    md5: '8cb7b4686f3869247b3ed189de780ea6',
    sha1: 'c24641f415cf36f4494ea4007fb3d77b47a6aad5',
    sha256: 'a7bdd079ead0adf21f30cee5b94e5581a9fa0d5fc8b3c1881dbc864dabc55a80',
  },
  dob: { date: '1965-10-01T06:35:49.694Z', age: 55 },
  registered: { date: '2009-02-11T05:48:39.772Z', age: 11 },
  phone: '021-953-7205',
  cell: '081-160-6277',
  id: { name: 'PPS', value: '0109675T' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/7.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
  },
  nat: 'IE',
};

module.exports = { fetchURL, data };
