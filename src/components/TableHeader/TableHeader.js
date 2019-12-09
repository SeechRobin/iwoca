import React from 'react';
import { Table } from 'semantic-ui-react'

const TableHeader = () => (
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Repayment date</Table.HeaderCell>
            <Table.HeaderCell>Principal</Table.HeaderCell>
            <Table.HeaderCell>Interest</Table.HeaderCell>
            <Table.HeaderCell>Total repayment</Table.HeaderCell>
        </Table.Row>
    </Table.Header>
);
export default TableHeader;