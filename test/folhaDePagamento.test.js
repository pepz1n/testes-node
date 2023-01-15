import funcoes from '../index.js';

test('Deve retornar a soma das horas exatas', () => {
  const esperado = 2500;
  const retornado = funcoes.somaHorasExtras(2000, 500);

  expect(retornado).toBe(esperado);
});

test('Deve descontar o valor do salario', () => {
  const esperado = 2200;
  const retornado = funcoes.calculaDescontos(2500, 300);

  expect(retornado).toBe(esperado);
});
