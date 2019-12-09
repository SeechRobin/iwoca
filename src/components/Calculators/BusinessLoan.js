import React from 'react';
import { Table, Input } from 'semantic-ui-react'

import { loanCalculator, checkLoanRules } from '../../helpers/loanCalculator';
import { BUSINESS_LOAN } from '../../constants';

import TableHeader from '../TableHeader/TableHeader';
import LoanTable from '../LoanTable/LoanTable';
import Totals from '../LoanTable/Totals';

const BusinessLoan = ({loanTerms, rules}) => {

    const [interestRate, setInterestRate] = React.useState(null);
  
    const isActive = rules ?  !checkLoanRules(loanTerms, rules) : true;
  
    const loanPayments = rules ? 
                            checkLoanRules(loanTerms, rules) ? 
                                loanCalculator(loanTerms, interestRate, BUSINESS_LOAN) : []
                           : [];
    
    const handleChange = (event) => {
        setInterestRate(parseInt(10,event.target.value));
    } 
    
    return (
        <React.Fragment> 
          <h2>Business Loan</h2>
          <Input 
            type="number" 
            label="Interest rate %" 
            name="interest-rate" 
            error={false} 
            onChange={handleChange} 
            disabled={isActive}
          />
          <Table celled>
            <TableHeader />
            <Table.Body>
                <LoanTable loanPayments={loanPayments} />
                <Totals loanPayments={loanPayments} />
            </Table.Body>
          </Table>
        </React.Fragment>
    );
  };
export default BusinessLoan;