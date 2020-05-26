describe('Suíte de testes de multiplicação', () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 10 para 5 e 2', () => {
        expect(Calculadora.multiplicar(5,2)).toEqual(10);
    });

    it('deve retornar 20 para 5 e 4 no formato texto', () => {
        expect(Calculadora.multiplicar('5','4')).toEqual(20);
    });

    it('deve retornar 4.5 para 1.5 e 3', () => {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });
    
    it('deve retornar 0 quando 1º inválido', () => {
        expect(Calculadora.multiplicar(undefined, 3)).toEqual(0);
    });
    
    it('deve retornar 0 quando 2º inválido', () => {
        expect(Calculadora.multiplicar(4, undefined)).toEqual(0);
    });
});