const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    expect.assertions(1);
    await expect(answerPhone(false)).rejects.toThrowError(
      'Infelizmente não podemos atender...',
    );
  });
});
