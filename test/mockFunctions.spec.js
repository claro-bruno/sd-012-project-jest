const mockFunctions = require('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

jest.mock('../src/mockFunctions');
const factorialFunc = (a) => !a || a * mockFunctions.factorial(a - 1);

describe('verifica as funções e os mocks com jest.fn()', () => {
  mockFunctions.add = jest.fn().mockImplementation((a, b) => a + b);
  mockFunctions.subtract = jest.fn().mockImplementation((a, b) => a - b);
  mockFunctions.multiply = jest.fn().mockImplementation((a, b) => a * b);
  mockFunctions.divide = jest.fn().mockImplementation((a, b) => a / b);
  mockFunctions.power = jest.fn().mockImplementation((a, b) => a ** b);
  mockFunctions.factorial = jest.fn().mockImplementation(factorialFunc);

  test('testa função add', () => {
    expect(mockFunctions.add(1, 2)).toEqual(3);
    expect(mockFunctions.add(8, 37)).toEqual(45);
    expect(mockFunctions.add(-11, 25)).toEqual(14);
    expect(mockFunctions.add(13, -188)).toEqual(-175);
    expect(mockFunctions.add(7, 26)).toEqual(33);
  });

  test('testa função subtract', () => {
    expect(mockFunctions.subtract(899, 35)).toEqual(864);
    expect(mockFunctions.subtract(-17, 333)).toEqual(-350);
    expect(mockFunctions.subtract(45, 97)).toEqual(-52);
    expect(mockFunctions.subtract(23, -108)).toEqual(131);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-104);
  });

  test('testa função multiply', () => {
    expect(mockFunctions.multiply(1, 2)).toEqual(2);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-36);
    expect(mockFunctions.multiply(-12, -7)).toEqual(84);
    expect(mockFunctions.multiply(19, 23)).toEqual(437);
  });

  test('testa função divide', () => {
    expect(mockFunctions.divide(169, 13)).toEqual(13);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-380);
    expect(mockFunctions.divide(42, 7)).toEqual(6);
    expect(mockFunctions.divide(729, 243)).toEqual(3);
    expect(mockFunctions.divide(1331, 11)).toEqual(121);
  });

  test('testa função power', () => {
    expect(mockFunctions.power(10, 2)).toEqual(100);
    expect(mockFunctions.power(2, 10)).toEqual(1024);
    expect(mockFunctions.power(5, 5)).toEqual(3125);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power(0, 0)).toEqual(1);
  });

  test('testa função factorial', () => {
    expect(mockFunctions.factorial(5)).toEqual(120);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    expect(mockFunctions.factorial(3)).toEqual(6);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    expect(mockFunctions.factorial(2)).toEqual(2);
  });
});

describe('verifica as funções e os mocks com spyOn', () => {
  const mockAdd = jest.spyOn(mockFunctions, 'add').mockImplementation((a, b) => a + b);
  const mockSubtract = jest.spyOn(mockFunctions, 'subtract').mockImplementation((a, b) => a - b);
  const mockMultiply = jest.spyOn(mockFunctions, 'multiply').mockImplementation((a, b) => a * b);
  const mockDivide = jest.spyOn(mockFunctions, 'divide').mockImplementation((a, b) => a / b);
  const mockPower = jest.spyOn(mockFunctions, 'power').mockImplementation((a, b) => a ** b);
  const mockFactorial = jest.spyOn(mockFunctions, 'factorial').mockImplementation(factorialFunc);

  test('testa função add', () => {
    expect(mockAdd(1, 2)).toEqual(3);
    expect(mockAdd(8, 37)).toEqual(45);
    expect(mockAdd(-11, 25)).toEqual(14);
    expect(mockAdd(13, -188)).toEqual(-175);
    expect(mockAdd(7, 26)).toEqual(33);
  });

  test('testa função subtract', () => {
    expect(mockSubtract(899, 35)).toEqual(864);
    expect(mockSubtract(-17, 333)).toEqual(-350);
    expect(mockSubtract(45, 97)).toEqual(-52);
    expect(mockSubtract(23, -108)).toEqual(131);
    expect(mockSubtract(-133, -29)).toEqual(-104);
  });

  test('testa função multiply', () => {
    expect(mockMultiply(1, 2)).toEqual(2);
    expect(mockMultiply(0, 5)).toEqual(0);
    expect(mockMultiply(-4, 9)).toEqual(-36);
    expect(mockMultiply(-12, -7)).toEqual(84);
    expect(mockMultiply(19, 23)).toEqual(437);
  });

  test('testa função divide', () => {
    expect(mockDivide(169, 13)).toEqual(13);
    expect(mockDivide(-1900, 5)).toEqual(-380);
    expect(mockDivide(42, 7)).toEqual(6);
    expect(mockDivide(729, 243)).toEqual(3);
    expect(mockDivide(1331, 11)).toEqual(121);
  });

  test('testa função power', () => {
    expect(mockPower(10, 2)).toEqual(100);
    expect(mockPower(2, 10)).toEqual(1024);
    expect(mockPower(5, 5)).toEqual(3125);
    expect(mockPower(1, 10)).toEqual(1);
    expect(mockPower(0, 0)).toEqual(1);
  });

  test('testa função factorial', () => {
    expect(mockFactorial(5)).toEqual(120);
    expect(mockFactorial(10)).toEqual(3628800);
    expect(mockFactorial(3)).toEqual(6);
    expect(mockFactorial(8)).toEqual(40320);
    expect(mockFactorial(2)).toEqual(2);
  });
});
