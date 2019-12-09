import { UPFRONT_FEES_PERCENTAGE, BUSINESS_LOAN } from '../constants';
import { getCurrentDate, getNextMonth } from './utils';

/**
 * Loan Calculator
 * Receives loan amount, duration and interest rate and type of loan then
 * returns an array with repayment
 * 
 * @param {Object} loanTerms
 * @param {Number} interestRate
 * @param {string} type
 * @returns {Array}
 */
export const loanCalculator = (loanTerms, interestRate, type)  => {
    console.log(loanTerms, interestRate);
    console.log(type);

    const {amount, duration} = loanTerms;

    const principal = amount/duration;
    let amountLeftToPay = amount;
    let repayments = [];

    for(let i=0; i<loanTerms.duration; i++){
        const interest = (interestRate/100) * amountLeftToPay + ( i === 0 && type === BUSINESS_LOAN ? (amount * UPFRONT_FEES_PERCENTAGE) : 0 );
        const totalRepayment = principal + interest;

        repayments.push({
            date: i === 0 ? getCurrentDate() : getNextMonth(repayments[i-1].date),
            principal,
            interest,
            totalRepayment,
        })
        amountLeftToPay = amountLeftToPay - principal;
    }  
    console.log(repayments);
    return repayments;
}

/**
 * Check loan rules return boolean 
 * 
 * @param {Object} loanTerms
 * @param {Object} rules
 * 
 * @returns {Boolean}
 */
export const checkLoanRules = (loanTerms, rules)  => {
    return (
        loanTerms.amount >= rules.amount_min && 
        loanTerms.amount <= rules.amount_max &&
        loanTerms.duration >= rules.duration_min &&
        loanTerms.duration <= rules.duration_max
    )
}