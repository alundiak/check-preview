import _ from 'lodash';
import React from 'react';
import { Table, Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'adjustImages', text: 'Adjust Image', value: 'adjustImages' },
  { key: 'print', text: 'Print', value: 'print' },
  { key: 'modify', text: 'Modify', value: 'modify' }
];

const DropdownExampleUpward = () => <Dropdown upward floating options={options} text="Preview check" />;

const showTableCells = rowIndex => (
  <React.Fragment>
    <Table.Cell>
      <DropdownExampleUpward />
    </Table.Cell>
    <Table.Cell>Check Profile # {rowIndex}</Table.Cell>
    <Table.Cell>Account Number #{rowIndex}</Table.Cell>
    <Table.Cell>Bank Name #{rowIndex}</Table.Cell>
    <Table.Cell>Company/Division #{rowIndex}</Table.Cell>
  </React.Fragment>
);

class GridView extends React.Component {
  state = {
    ...this.props
  }

  // TODO move this func. out
  showRows = _.times(4, (index) => {
    const { previewCheck } = this.props;
    const i = index + 1;
    return (
      <Table.Row key={i} onClick={() => previewCheck(i)}>
        {showTableCells(i)}
      </Table.Row>
    );
  })

  render() {
    
    return (
      <div className="grid-container">
        <Table striped>
          <Table.Header>
            <Table.Row title="click to preview">
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell>Check Profile Name</Table.HeaderCell>
              <Table.HeaderCell>Account Number</Table.HeaderCell>
              <Table.HeaderCell>Bank Name</Table.HeaderCell>
              <Table.HeaderCell>Company/Division</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.showRows}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default GridView;
