// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// Referência: Leo Ferreira me ajudou na sala de estudo.
describe('o retorno do telefonema', () => {
  test('atende', () => {
    // assert.fail();
    // eu espero que a answerPhone esteja recebendo o valor true, e resolva retornando 'Oi!'
    const atende = answerPhone;
    return expect(atende(true)).resolves.toBe('Oi!');
  });
  test('ocupado', () => {
    // assert.fail();
    // eu espero que a answerPhone esteja recebendo o valor false, e rejeita retornando com erro mensagem: 'Infelizmente não podemos atender...'.
    const ocupado = answerPhone;
    return expect(ocupado(false)).rejects.toThrowError('Infelizmente não podemos atender...');
  });
});
