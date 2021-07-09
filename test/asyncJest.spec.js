// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// consultei o repositório da Camila Malvessi de onde tirei a ideia do  para resolver a parte do test ocupado. https://github.com/tryber/sd-012-project-jest/tree/camila-malvessi-project-jest
describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    await expect(answerPhone(true)).resolves.toEqual('Oi!');
  });

  test('ocupado', async () => {
    expect.assertions(1);
    await expect(answerPhone(false)).rejects.toEqual(Error('Infelizmente não podemos atender...'));
  });
});
