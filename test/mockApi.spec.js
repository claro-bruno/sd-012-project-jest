const api = require('../src/mockApi');

// Referências: Tiago Ornelas e Rodrigo Merlone.
const mockUser = async () => ({ // precisa ser assíncrona (uma promise) para ser "lida" pelo .then no teste.
  gender: 'male',
  name: { first: 'Antônio', last: 'Britto' },
  location: { country: 'Brazil' },
  email: 'tunico@bol.com.br',
  login: { username: 'tunicao123', password: '1234567890' },
});

describe('verifica o usuário', () => {
  api.fetchURL = jest.fn().mockImplementation(mockUser); // simulamos uma requisição implementando a funçao mockUser para fetchURL.

  test('verifica se o usuário é o tunico', async () => (
    api.fetchURL().then((user) => {
      expect(user.gender).toEqual('male');
      expect(user.name.first).toEqual('Antônio');
      expect(user.name.last).toEqual('Britto');
      expect(user.location.country).toEqual('Brazil');
      expect(user.email).toEqual('tunico@bol.com.br');
      expect(user.login.username).toEqual('tunicao123');
      expect(user.login.password).toEqual('1234567890');
    })));
});
