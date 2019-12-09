import {
    loanCalculator,
} from './loanCalculator';
import { BUSINESS_LOAN, REVOLVING_CREDIT_FACIITY } from '../constants';

describe('Business Loan Calculator', () => {

    let calculatorResults;

    beforeEach(() => {
        calculatorResults = loanCalculator({ duration: 4, amount: 10000 }, 3, BUSINESS_LOAN);
	});
  
    it('Returns correct calculations', () => {
        expect(calculatorResults[0].date).toEqual("09/12/2019");
        expect(calculatorResults[0].interest).toEqual(1300);
        expect(calculatorResults[0].principal).toEqual(2500);
        expect(calculatorResults[0].totalRepayment).toEqual(3800);
    });
});

describe('Revolving Credit Facility Calculator', () => {
    let calculatorResults;

    beforeEach(() => {
        calculatorResults = loanCalculator({ duration: 4, amount: 10000 }, 3, REVOLVING_CREDIT_FACIITY);
	});
  
    it('Returns correct calculations', () => {
        expect(calculatorResults[0].date).toEqual("09/12/2019");
        expect(calculatorResults[0].interest).toEqual(300);
        expect(calculatorResults[0].principal).toEqual(2500);
        expect(calculatorResults[0].totalRepayment).toEqual(2800);
    });
});
