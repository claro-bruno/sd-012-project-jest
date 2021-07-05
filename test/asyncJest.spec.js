// const assert = require('assert');
// const { AsyncLocalStorage } = require('async_hooks');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// https://jestjs.io/pt-BR/docs/asynchronous
// https://stackoverflow.com/questions/46042613/how-to-test-the-type-of-a-thrown-exception-in-jest
describe('o retorno do telefonema', () => {
  test('atende', async () => {
    // assert.fail();
    const responde = await answerPhone(true);
    expect(responde).toBe('Oi!');
  });
  test('ocupado', async () => {
    // assert.fail();
    // const naoResponde = await answerPhone(false);
    await expect(answerPhone(false)).rejects.toThrow('Infelizmente não podemos atender...');
  });
});
