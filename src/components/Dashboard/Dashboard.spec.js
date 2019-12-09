import React from 'react';

import { render, cleanup}  from '@testing-library/react';

import Dashboard from '../Dashboard/Dashboard';

describe('<Dashboard />', () => {
    let wrapper;

	beforeEach(() => {
		const { container } = render(<Dashboard />);
     	wrapper = container;
	});
  
	afterEach(() => {
	  cleanup();
	});

	it('should render without 💥', () => {
		const { container } = render(<Dashboard />);
		expect(container).toBeTruthy();
	});
	
	it('should render calculators panel', () => {
		const calculatorPanel = wrapper.getElementsByClassName('calculators');
		expect(calculatorPanel.length).toBe(1);
    });
    
    it('should render terms panel', () => {
		const termPanel = wrapper.getElementsByClassName('loan-terms');
		expect(termPanel.length).toBe(1);
	});
  
  });