export abstract class FiguraGeometrica {
    variable:number 


    constructor(variable:number){
        this.variable = variable

    }
    abstract Perimetro(): number
}

//Calculo perimetro del area de un circulo 

export class Circulo extends FiguraGeometrica{
    constructor (variable:number){
        super(variable)
    }
    
    override Perimetro(): number {
        return 2 * 3.141* this.variable;
    }
}


//Calculo Perimetro triangulo,escaleno y equilatero

export class Triangulo extends FiguraGeometrica{
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor(variable: number, ladoA: number, ladoB: number, ladoC: number) {
        super(variable);
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
      }
    
    override Perimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}
