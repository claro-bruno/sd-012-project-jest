// const assert = require('assert');
const answerPhone = require('../src/asyncJest');

const ERROR_MESSAGE = 'Infelizmente não podemos atender...';
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende, testado com resolves', () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado, testado com rejects', () => {
    expect(answerPhone(false)).rejects.toThrow({ message: ERROR_MESSAGE });
  });

  test('atende, testado com then', () => {
    expect.assertions(1);
    return answerPhone(true).then((response) => expect(response).toBe('Oi!'));
  });

  test('ocupado, testado com catch', () => {
    expect.assertions(1);
    return answerPhone(false).catch((error) => expect(error.message).toBe(ERROR_MESSAGE));
  });

  test('atende, testado com done', async (done) => {
    const response = await answerPhone(true);
    expect(response).toBe('Oi!');
    done();
  });

  test('ocupado, testado com done', async (done) => {
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error.message).toBe(ERROR_MESSAGE);
      done();
    }
  });
});
