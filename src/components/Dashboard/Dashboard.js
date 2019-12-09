import React from 'react';
import { Grid, Container, Input, Label } from 'semantic-ui-react'

import BusinessLoan from '../Calculators/BusinessLoan';
import RevolvingCreditFacility from '../Calculators/RevolvingCreditFacility';

import * as api from "../../helpers/api/api";

import './_dashboard.scss';

const Dashboard = () => {

  const [loanTerms, setLoanTerms] = React.useState({
      duration: null,
      amount: null,
  });

  const [loanRules, setLoanRules] = React.useState({});

  React.useEffect(() => {
    api.getLoanRules()
    .then(response => {
        setLoanRules(response);
    })
    .catch(err => {
        console.log(err);
    });
  }, []);

  const handleChange = (event) => {
      setLoanTerms({
          ...loanTerms,
          [event.target.name]: parseInt(event.target.value, 10),
      });
  } 

    return (
    <Container className="dashboard">
      <h1> Your Loan</h1>
      <div className="loan-terms">
        <Grid centered>
            <Input type="number" label="Amount" name="amount" onChange={handleChange} />
            <Label pointing="left"> £</Label>
            <Input type="number" label="Duration" name="duration" onChange={handleChange}/>
            <Label pointing="left"> months </Label>
        </Grid>
      </div>
      
      <Grid  className="calculators" columns={2}>
        <Grid.Column>
            <RevolvingCreditFacility 
              loanTerms={loanTerms} 
              rules={loanRules.revolving_credit_facility}
            />
        </Grid.Column>
        <Grid.Column>
            <BusinessLoan 
                loanTerms={loanTerms}
                rules={loanRules.business_loan}
            />
        </Grid.Column>
      </Grid>
    </Container>
    );
  };
export default Dashboard;