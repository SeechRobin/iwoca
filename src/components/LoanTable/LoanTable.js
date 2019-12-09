import React from 'react';
import { Table } from 'semantic-ui-react'

import { formatCurrency } from '../../helpers/utils';

const LoanTable = ({loanPayments}) => (
    loanPayments.map(payments => (
        <Table.Row key={payments.date + payments.principal}>
            <Table.Cell>{payments.date}</Table.Cell>
            <Table.Cell>{formatCurrency(payments.principal)}</Table.Cell>
            <Table.Cell>{formatCurrency(payments.interest)}</Table.Cell>
            <Table.Cell>{formatCurrency(payments.totalRepayment)}</Table.Cell>
        </Table.Row>
    ))
);
export default LoanTable;