import { expect } from 'chai';
import { describe } from 'mocha';
import { IImc, imcCalculator } from '../../../src/classes/Business/ImcCalculator/ImcCalculator';

describe("AdView", function () {

    it("Shoul return an Imc", function () {
        let imc: IImc = {
            height: 1.92,
            weight: 112
        }
        expect(imcCalculator(imc)).to.equal(30.381944444444446)
    })
})