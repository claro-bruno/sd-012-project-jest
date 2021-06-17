// const assert = require('assert');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    // assert.fail();
    expect.assertions(1);
    const answer = await answerPhone('Alo');
    expect(answer).toEqual('Oi!');
  });
  test('ocupado', async () => {
    // assert.fail();
    expect.assertions(1);
    try {
      const answer = await answerPhone();
      expect(answer).toEqual('Oi!');
    } catch (error) {
      expect(error.message).toBe('Infelizmente não podemos atender...');
    }
  });
});
