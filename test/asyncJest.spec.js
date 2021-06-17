// const assert = require('assert');
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
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    return answerPhone(true).then((resposta) => expect(resposta).toBe('Oi!'));
  });
  test('ocupado', async () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui

    // Primeira Solução deu certo!
    // return answerPhone(false).catch((error) => {
    //   console.log(error.message);
    //   expect(error.message).toBe('Infelizmente não podemos atender...');
    expect.assertions(1);
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    }
    // });
  });
});
