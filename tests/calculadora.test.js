const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4); // expect(softcoded).toBe(hardcoded)
});

test("somar 11 + 33 deve retornar 44", () => {
  const resultado = calculadora.somar(11, 33);
  expect(resultado).toBe(44); // expect(softcoded).toBe(hardcoded)
});

test("somar 'banana' + 100 deve retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro"); // expect(softcoded).toBe(hardcoded)
});
