import  React from 'react';

import { render, cleanup}  from '@testing-library/react';

import LoanTable from '../LoanTable/LoanTable';

describe('<LoanTable />', () => {
    let wrapper;
    
    const loanPayments  = [
         { date: "09/12/2019", principal: 2500, interest: 1000, totalRepayment: 3500 },
         { date: "09/01/2020", principal: 2500, interest: 0, totalRepayment: 2500 },
         { date: "09/02/2020", principal: 2500, interest: 0, totalRepayment: 2500 },
         { date: "09/03/2020", principal: 2500, interest: 0, totalRepayment: 2500 },
    ];

	beforeEach(() => {
		const { container } = render(<LoanTable loanPayments={loanPayments} />);
     	wrapper = container;
	});
  
	afterEach(() => {
	  cleanup();
	});

	it('should render without 💥', () => {
		const { container } = render(<LoanTable loanPayments={[]} />);
		expect(container).toBeTruthy();
    });
    
    it('renders 4 <tr> tags', () => {
		const th = wrapper.getElementsByTagName('tr');
		expect(th.length).toBe(4);
	});
  
  
  });