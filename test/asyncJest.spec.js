const answerPhone = require('../src/asyncJest');

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

/* // Utilizando os conceitos de Promise
describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    expect(answerPhone(true)).resolves.toEqual('Oi!');
  });
  test('ocupado', () => {
    const errorMsg = 'Infelizmente não podemos atender...';
    expect.assertions(2);
    expect(answerPhone(false)).rejects.toThrow();
    expect(answerPhone(false)).rejects.toThrowError(new Error(errorMsg));
  });
}); */

// Utilizando os conceitos de Async/Await
describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    await expect(answerPhone(true)).resolves.toEqual('Oi!');
  });
  test('ocupado', async () => {
    const errorMsg = 'Infelizmente não podemos atender...';
    expect.assertions(2);
    await expect(answerPhone(false)).rejects.toThrow();
    await expect(answerPhone(false)).rejects.toThrowError(new Error(errorMsg));
  });
});
