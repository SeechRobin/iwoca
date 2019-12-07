import React from 'react';
import { Container } from 'semantic-ui-react'

import BusinessLoan from '../Calculators/BusinessLoan';
import RevolvingCreditFacility from '../Calculators/RevolvingCreditFacility';

import * as api from "../../helpers/api/api";


const Dashboard = () => {

  React.useEffect(() => {
    api.getLoanRules()
    .then(response => {
        console.log(response);
    });
  }, []);

    return (
    <Container>
      Dashboard
      <BusinessLoan />
      <RevolvingCreditFacility />
    </Container>
    );
  };
export default Dashboard;