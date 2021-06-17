// const assert = require('assert');
// const { test, expect } = require('@jest/globals');
const answerPhone = require('../src/asyncJest');

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    const answer = await answerPhone('Ola');

    expect(answer).toBe('Oi!');
    // expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    expect.assertions(1);
    try {
      await answerPhone();
    } catch (error) {
      expect(error).toHaveProperty('message', 'Infelizmente não podemos atender...');
      // expect(answerPhone(false)).rejects.toEqual(new Error('Infelizmente não podemos atender...'));
    }
  });
});
