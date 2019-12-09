import React from 'react';
import { Table } from 'semantic-ui-react'

import { rowTotal, formatCurrency } from '../../helpers/utils';

const TableHeader = ({loanPayments}) => {

    const principal = rowTotal('principal', loanPayments);
    const interest = rowTotal('interest', loanPayments);
    const totalRepayment = rowTotal('totalRepayment', loanPayments);

    return (
        <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell>{formatCurrency(principal)}</Table.Cell>
            <Table.Cell>{formatCurrency(interest)}</Table.Cell>
            <Table.Cell>{formatCurrency(totalRepayment)}</Table.Cell>
        </Table.Row> 
    )

};
    
export default TableHeader;