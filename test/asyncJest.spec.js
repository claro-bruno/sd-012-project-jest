const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    const error = new Error('Infelizmente não podemos atender...');
    await expect(answerPhone()).rejects.toEqual(error);
  });
});