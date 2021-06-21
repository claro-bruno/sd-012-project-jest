const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toEqual('Oi!'); // Resolvido com a ajuda da Gisele na mentoria
  });
  test('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone(false)).rejects
      .toEqual(new Error('Infelizmente não podemos atender...'));
  });
});
// Ao rever a aula ao vivo e fazer alguns testes, percebi que meu código estava dando um falso positivo. Com isso, adicionei o expect.assertions e o return e o problema foi resolvido!
