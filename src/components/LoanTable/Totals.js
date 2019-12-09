import React from 'react';
import { Table } from 'semantic-ui-react'

import { rowTotal, formatCurrency } from '../../helpers/utils';

const TableHeader = ({loanPayments}) => {

    return (
        <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell>{formatCurrency(rowTotal('principal', loanPayments))}</Table.Cell>
            <Table.Cell>{formatCurrency(rowTotal('interest', loanPayments))}</Table.Cell>
            <Table.Cell>{formatCurrency(rowTotal('totalRepayment', loanPayments))}</Table.Cell>
        </Table.Row> 
    )


};
    
export default TableHeader;