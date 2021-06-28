// const assert = require('assert');
const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone(false)).rejects.toThrow('Infelizmente não podemos atender');
  });
});

// Depois de ver esse exemplo consegui entender melhor a dinâmica do teste: https://stackoverflow.com/questions/47144187/can-you-write-async-tests-that-expect-tothrow
