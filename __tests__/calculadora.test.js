import { somar,  subtrair } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
        // AAA
        //Arrange (preparar)
    
    const a = 5;
    const b = 7;

    //Act (executar)
    const resultado = somar(a, b);

    //Assert (verificar)
    expect(resultado).toBe(12);
});

    test("Deve subtrair dois números corretamente", () => {
        // AAA
        //Arrange (preparar)
        const a = 5;
        const b = 7;

        //Act (executar)
        const resultado = subtrair(a, b);

        //Assert (verificar)
        expect(resultado).toBe(-2);
    });
});