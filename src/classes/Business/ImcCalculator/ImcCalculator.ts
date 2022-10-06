
export interface IImc {
    weight: number,
    height: number
}
export function imcCalculator(imc: IImc) {
    let imcCalc = Math.floor(imc.weight / (imc.height * imc.height)) / 100
    return imcCalc;
}