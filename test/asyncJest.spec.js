const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const returnal = await answerPhone(true);

    expect(returnal).toBe('Oi!');
  });
  test('ocupado', async () => {
    const erro = new Error('Infelizmente não podemos atender...');

    expect(answerPhone(false)).rejects.toThrow(erro);
  });
});
