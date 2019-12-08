import { UPFRONT_FEES_PERCENTAGE } from '../constants/';
/**
 * 
 * 
 * @param {Object} loanTerms
 * @param {Number} interestRate
 * @returns {Array}
 */
export const businessLoanCalculator = (loanTerms, interestRate)  => {

    const {amount, duration} = loanTerms;

    const principal = amount/duration;
    let amountLeftToPay = amount;
    let repaymemnts = [];


    for(let i=0; i<loanTerms.duration; i++){

        const interest = (interestRate/100) * amountLeftToPay + ( i===0 ? (amount * UPFRONT_FEES_PERCENTAGE) : 0 );
        const totalRepayment = principal + interest;

        repaymemnts.push({
            date: "",
            principal,
            interest,
            totalRepayment,
        })

        amountLeftToPay = amountLeftToPay - principal;

    }

    // console.log(repaymemts);
   
    return repaymemnts;
}