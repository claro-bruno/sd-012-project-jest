const assert = require('assert');
const asyncJest = require('../src/asyncJest');
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
    const mensage = 'Oi!';
    return asyncJest(true)
      .then((resolve) => assert.strictEqual(resolve, mensage));
  });
  test('ocupado', () => {
    const erroMensage = new Error('Infelizmente não podemos atender...');
    return asyncJest(false)
      .catch((rejects) => assert.deepStrictEqual(rejects, erroMensage));
  });
});
