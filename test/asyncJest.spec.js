const answerPhone = require('../src/asyncJest');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// Iniciando projeto!
describe('o retorno do telefonema', () => {
  test('atende', async () => {
    await expect(Promise.resolve(answerPhone(true))
      .then('Oi!'));
  });
  test('ocupado', async () => {
    await expect(Promise.reject(answerPhone(false))
      .then(new Error('Infelizmente não podemos atender...')));
  });
});
