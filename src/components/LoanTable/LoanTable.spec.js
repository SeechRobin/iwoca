import  React from 'react';

import { render, cleanup}  from '@testing-library/react';

import LoanTable from '../LoanTable/LoanTable';

describe('<LoanTable />', () => {
    let wrapper;
    
    const loanPayments  = [
        { readingDate: "2017-03-28T00:00:00.000Z", cumulative: 17580, unit: "kWh" },
        { readingDate: "2017-04-15T00:00:00.000Z", cumulative: 17759, unit: "kWh" },
        { readingDate: "2017-05-08T00:00:00.000Z", cumulative: 18002, unit: "kWh" },
    ]

	beforeEach(() => {
		const { container } = render(<LoanTable loanPayments={[]} />);
     	wrapper = container;
	});
  
	afterEach(() => {
	  cleanup();
	});

	it('should render without 💥', () => {
		const { container } = render(<LoanTable loanPayments={[]} />);
		expect(container).toBeTruthy();
	});
  
  });