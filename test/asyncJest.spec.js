// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

const atende = true;
const ocupado = false;
const expectResolve = 'Oi!';
const expectReject = new Error('Infelizmente não podemos atender...');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    // assert.fail();
    expect.assertions(1);
    return expect(answerPhone(atende)).resolves.toBe(expectResolve);
  });
  test('ocupado', async () => {
    // assert.fail();
    expect.assertions(1);
    return expect(answerPhone(ocupado)).rejects.toEqual(expectReject);
  });
});
