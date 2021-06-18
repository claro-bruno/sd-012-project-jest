const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  expect.assertions(1);
  test('atende', () => answerPhone('oi').then((valor) => expect(valor).toBe('Oi!')));
  expect.assertions(1);
  test('ocupado', () => answerPhone().catch((valor) => expect(valor.message)
    .toBe('Infelizmente não podemos atender...')));
});
