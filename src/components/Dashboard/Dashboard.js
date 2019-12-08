import React from 'react';
import { Grid, Container, Input } from 'semantic-ui-react'

import BusinessLoan from '../Calculators/BusinessLoan';
import RevolvingCreditFacility from '../Calculators/RevolvingCreditFacility';

import * as api from "../../helpers/api/api";

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
    });
  }, []);

  const handleChange = (event) => {
      setLoanTerms({
          ...loanTerms,
          [event.target.name]: parseInt(event.target.value, 10),
      });
  } 

    return (
    <Container>
      <h1> Your Loan</h1>
      <Input type="number" label="Amount" maxLength="100" name="amount" onChange={handleChange} />
      <Input type="number" label="Duration" name="duration" onChange={handleChange}/>
      <Grid columns={2}>
        <Grid.Column>
            <BusinessLoan loanTerms={loanTerms}/>
        </Grid.Column>
        <Grid.Column>
            <RevolvingCreditFacility />
        </Grid.Column>
      </Grid>
    </Container>
    );
  };
export default Dashboard;