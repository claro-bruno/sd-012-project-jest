// const assert = require('assert');
 const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// Referencia: Leo Ferreira me ajudou na sala de estudo.
describe('o retorno do telefonema', () => {
  test('atende', () => {
    // assert.fail();
    // eu espero que a answerPhone recebendo o valor true resolva retornando 'Oi'
    return expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', () => {
    // assert.fail();
    // eu espero que a answerPhone recebendo o valor false rejeita retornonando com erro. 
    return expect(answerPhone(false)).rejects.toThrowError('Infelizmente não podemos atender...');
  });
});
