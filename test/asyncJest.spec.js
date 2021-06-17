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
    expect.assertions(1);
    await expect(answerPhone(true)).resolves.toBe('Oi!');
    /* Alternativa sem o await, precisaria só remover o async do test atende */
    // return expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone(false)).rejects.toEqual(new Error(
      'Infelizmente não podemos atender...',
    ));
    /* Alternativa usando o Try e Catch, precisaria por async no test ocupado */
    // try {
    //   await answerPhone(false);
    // } catch (error) {
    // expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    // }
  });
});
