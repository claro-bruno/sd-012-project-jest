// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    return answerPhone(true).then((messageOi) => expect(messageOi).toBe('Oi!'));
  });
  test('ocupado', () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    return answerPhone(false).catch((errorCall) => {
      expect(errorCall).toEqual(new Error('Infelizmente não podemos atender..'));
    });
  });
});
