describe("Suite de testes de divisao", () => {
    
    var Calculadora = require('../../src/js/calculadora.js');

    it("deve retornar 4 para 8 e 2", () => {
        expect(Calculadora.dividir(8, 2)).toEqual(4);
    });
     
    it("deve retornar 2 para 6 e 3 no formato texto", () => {
        expect(Calculadora.dividir(6,3)).toEqual(2);
    });

    it("deve retornar 1.5 para 4.5 e 3", () => {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });

    it("deve retornar 'Erro' para divisão por 0", () => {
        expect(Calculadora.dividir(5,0)).toEqual('Erro');
    });

    it("deve retornar 0 para valor 1 inválido", () => {
        expect(Calculadora.dividir(undefined, 5)).toEqual(0);
    });
    
    it("deve retornar 0 para valor 2 inválido", () => {
        expect(Calculadora.dividir(4, undefined)).toEqual(0);
    });
});
