// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'
*/

describe('o retorno do telefonema', () => {
  test('atende', () => answerPhone('oi').then((data) => {
    expect.assertions(1);
    // Promisse
    expect(data).toBe('Oi!');
  }));
  test('ocupado', async () => {
    // Async
    try {
      await answerPhone();
    } catch (error) {
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    }
  });
});
// Links
// https://jestjs.io/pt-BR/docs/asynchronous;
