const { sum, myRemove, myFizzBuzz, encode, decode } = require("./sum");
describe("A função Sum", () => {
  it("Testa a soma de 4 e 5", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("Testa a soma de 0 e 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Testa o erro, caso ocorra uma string como parâmetro", () => {
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});

describe("A função My Remove", () => {
  it("Retorna array desejado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it("Não retorna array desejado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it("Retorna array desejado, mesmo tentando remover um item que não esteja dentro do array", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("Testa a função myFizzBuzz", () => {
  it("Verifca se um número é divísivel por 3 e 5", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });

  it("Verifca se um número é divísivel por 3", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });

  it("Verifca se um número é divísivel por 5", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });

  it("Verifca se um número não é divísivel por 3 e 5", () => {
    expect(myFizzBuzz(1)).toBe(1);
  });

  it("Verifca se uma chamada sem número tem um retorno esperado", () => {
    expect(myFizzBuzz("1")).not.toBe(true);
  });
});

describe("Testa as funções Encode E Decode", () => {
  it("A função encode é definida", () => {
    expect(encode).toBeDefined();
  });

  it("Encode é uma função", () => {
    expect(typeof encode).toEqual("function");
  });

  it('Converte "a" no número 1', () => {
    expect(encode("amanda")).toEqual("1m1nd1");
  });

  it('Converte "b", "i" e "a" nos números 2, 3 e 1', () => {
    expect(encode("elian")).toEqual("2l31n");
  });

  it('Converte "o" e "u" nos números 4 e 5', () => {
    expect(encode("outro")).toEqual("45tr4");
  });

  it('Converte os números 4 e 5 em "o" e "u"', () => {
    expect(decode("45tr4")).toEqual("outro");
  });

  it('Converte os números 2, 3 e 1 em "b", "i" e "a"', () => {
    expect(decode("2l31n")).toEqual("elian");
  });

  it("Checa se o retorno da função tem o mesmo número de caracteres", () => {
    expect(encode("thalys").length).toEqual(6);
  });

  it("Checa se o retorno da função tem o mesmo número de caracteres", () => {
    expect(decode("thalys").length).toEqual(6);
  });
});
