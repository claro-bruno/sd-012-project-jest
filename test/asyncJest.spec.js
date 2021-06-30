const answerPhone = require('../src/asyncJest');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
describe('o retorno do telefonema', () => { // await/async method für asynchrone Funktionen (funções assincronas)
  test('atende', async () => {
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    try { await answerPhone(false); } catch (error) {
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    }
  });
});
/*                 Fontes
  https://jestjs.io/pt-BR/docs/next/asynchronous
  extesão Grepper do Google Chrome
  https://www.w3schools.com/js/js_async.asp
*/
