describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect(answerPhone(true)).resolves.toBe('Olá!');
  });
  test('ocupado', () => {
    expect(answerPhone(false)).rejects.toEqual(new Error('Infelizmente não podemos atender...'));
  });
});