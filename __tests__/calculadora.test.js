import { somar } from "../src/calculadora.js";

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
});
