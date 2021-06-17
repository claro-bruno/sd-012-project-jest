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
  test('atende', () => {
    // const waitingAnswer = await answerPhone(true); (com async)
    // console.log(waitingAnswer); se eu coloco o console.log antes recebo "Promise { Oi! }". quando coloco aqui dentro, recebo só "Oi!" pq? pq a promise foi resolvida depois do await
    expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', () => {
    expect.assertions(1);
    // try {
    //  await answerPhone(false);
    // } catch (error) {
    //   expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    // };
    expect(answerPhone(false)).rejects.toEqual(new Error('Infelizmente não podemos atender...'));
  });
});
