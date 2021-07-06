// const assert = require('assert');

const answerPhone = require('../src/asyncJest');

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
    answerPhone(true).then((message) => {
      expect(message).toBe('Oi!');
    })
      .catch((error) => console.log(error.message));
  });
  test('ocupado', () => {
    expect(() => answerPhone().toThrow());
    expect(() => answerPhone().toThrowError(new Error('Infelizmente não podemos atender...')));
    // answerPhone(false).then((mensagem) => console.log(mensagem))
    //   .catch((reject) => {
    //     expect(reject).toBe(new Error('Infelizmente não podemos atender...'));
    //     console.log(reject.mensagem);
    //   });
  });
});
