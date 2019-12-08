import React from 'react';
import { Table, Input } from 'semantic-ui-react'

import { businessLoanCalculator } from '../../helpers/loanCalculators';

const BusinessLoan = ({loanTerms}) => {

    const [interestRate, setInterestRate] = React.useState(null);
    
    const handleChange = (event) => {
        setInterestRate(parseInt(10,event.target.value));
    } 

    const loanPayments = businessLoanCalculator(loanTerms, interestRate);
    
    return (
        <React.Fragment> 
          <Input type="number" label="Interest rate" name="interest-rate" error={false} onChange={handleChange} />
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Repayment date</Table.HeaderCell>
                <Table.HeaderCell>Principal</Table.HeaderCell>
                <Table.HeaderCell>Interest</Table.HeaderCell>
                <Table.HeaderCell>Total repayment</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        
            <Table.Body>
              <Table.Row>
                <Table.Cell>30/06/2019</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>30/07/2019</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>30/08/2019</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </React.Fragment>
    );
  };
export default BusinessLoan;