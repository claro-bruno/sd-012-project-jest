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
  expect.assertions(1);
  test('atende', () => answerPhone('oi').then((valor) => expect(valor).toBe('Oi!')));
  expect.assertions(1);
  test('ocupado', () => answerPhone().catch((valor) => expect(valor.message)
    .toBe('Infelizmente não podemos atender...')));
});
