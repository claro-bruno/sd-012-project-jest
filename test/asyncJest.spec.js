// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
// const { expect } = require('@Jest/globals');
// const { fetch } = require( 'node-fetch' )
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    await expect(answerPhone(true)).resolves.toBe('Oi!');
    // Insira seu teste assíncrono aqui
  });
  test('ocupado', async () => {
    expect.assertions(1);
    // return answerPhone(false)
    //  .catch((output) => expect(output).toEqual(new Error('Infelizmente não podemos atender...')));
    await expect(answerPhone(false))
      .rejects.toThrowError(Error('Infelizmente não podemos atender...'));
    // Insira seu teste assíncrono aqui
  });
});

// https://jestjs.io/pt-BR/docs/expect#tothrowerror<3
