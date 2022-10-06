
export interface IImc {
    weight: number,
    height: number
}
export function imcCalculator(imc: IImc) {
    let imcCalc = imc.weight / (imc.height * imc.height)
    return imcCalc;
}