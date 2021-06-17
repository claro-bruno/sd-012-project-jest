// const assert = require('assert');
// const { exception } = require('console');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return answerPhone(true).then((data) => {
      expect(data).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    expect.assertions(1);
    return answerPhone(false)
      .catch((out) => expect(out).toEqual(new Error('Infelizmente não podemos atender...'))); // uso new Error por conta do catch, e por conta da func
  });
});

//  async
describe('o retorno do telefonema sync e reject', () => {
  test('atende', async () => expect(await answerPhone(true)).toBe('Oi!'));
  test('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone(false))
      .rejects.toThrow('Infelizmente não podemos atender...'); // uso toThrow, para achar o erro com rejects.
  });
});

describe('o retorno do telefonema resolves', () => {
  test('atende', () => {
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toBe('Oi!');
  });
});
