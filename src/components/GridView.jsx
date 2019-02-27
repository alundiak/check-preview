// import _ from 'lodash';
import React from 'react';
import { Table, Dropdown } from 'semantic-ui-react';

// const showHeaders = _.times(4, i => (
//   <Table.HeaderCell key={i}>
//     {columns(i)}
//   </Table.HeaderCell>
// ));

// const showColumns = function (rowIndex) {
//   return _.times(12, j => (
//     <Grid.Column key={`${rowIndex} _ ${j}`}>
//       {rowIndex + '_' + j}
//     </Grid.Column>
//   ));
// }

// const showRows = _.times(4, i => (
//   <Grid.Row key={i}>
//     {columns(i)}
//   </Grid.Row>
// ));

const options = [
  { key: 'adjustImages', text: 'Adjust Image', value: 'adjustImages' },
  { key: 'print', text: 'Print', value: 'print' },
  { key: 'modify', text: 'Modify', value: 'modify' }
];

const DropdownExampleUpward = () => <Dropdown upward floating options={options} text="Preview check" />;

const GridView = () => (
  <div className="grid-container">
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Actions</Table.HeaderCell>
          <Table.HeaderCell>Check Profile Name</Table.HeaderCell>
          <Table.HeaderCell>Account Number</Table.HeaderCell>
          <Table.HeaderCell>Bank Name</Table.HeaderCell>
          <Table.HeaderCell>Company/Division</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <DropdownExampleUpward />
          </Table.Cell>
          <Table.Cell>CP #1</Table.Cell>
          <Table.Cell>Account Number #1</Table.Cell>
          <Table.Cell>Bank Name #1</Table.Cell>
          <Table.Cell>Company/Division 1</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <DropdownExampleUpward />
          </Table.Cell>
          <Table.Cell>CP #2</Table.Cell>
          <Table.Cell>Account Number #2</Table.Cell>
          <Table.Cell>Bank Name #2</Table.Cell>
          <Table.Cell>Company/Division #2</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <DropdownExampleUpward />
          </Table.Cell>
          <Table.Cell>CP #3</Table.Cell>
          <Table.Cell>Account Number #3</Table.Cell>
          <Table.Cell>Bank Name #3</Table.Cell>
          <Table.Cell>Company/Division #3</Table.Cell>
        </Table.Row>

      </Table.Body>
    </Table>
  </div>
);

export default GridView;
