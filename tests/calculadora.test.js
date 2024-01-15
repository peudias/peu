// expect = vem do sistema; valor que será dinâmico
// toBe   = valor esperado; valor "hardcore", ou seja, eu defino
test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});

test("espero que 2 seja 1", () => {
  expect(2).toBe(1);
});

test("espero que maçã seja 1", () => {
  expect("maçã").toBe(1);
});

test("espero que maçã seja banana", () => {
  expect("maçã").toBe("banana");
});

test("espero que maçã seja maçã", () => {
  expect("maçã").toBe("maçã");
});
