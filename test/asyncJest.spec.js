// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect(await answerPhone('true')).toBe('Oi!');
  });
  test('ocupado', () => {
    const Erro = new Error('Infelizmente não podemos atender...');
    expect(answerPhone(false)).rejects.toThrowError(Erro);
  });
});
