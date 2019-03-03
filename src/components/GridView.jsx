import React from 'react';
import { Table, Dropdown } from 'semantic-ui-react';

const options = [
    { key: 'adjustImages', text: 'Adjust Image', value: 'adjustImages' },
    { key: 'print', text: 'Print', value: 'print' },
    { key: 'modify', text: 'Modify', value: 'modify' }
];

const DropdownExampleUpward = () => <Dropdown upward floating options={options} text="Preview check" />;

class GridView extends React.Component {
    state = {
        // data: this.props.gridRowsData, // maybe
        ...this.props
    }

    rememberSelectedRow = (newRowIndex) => {
        this.setState({
            clickedRowIndex: newRowIndex
        }, () => {
            this.props.propagateSelectedRow(newRowIndex); //eslint-disable-line
        });
    }

    // TODO move this code to functional component
    showRows = ((rowData, index) => {
        const { previewCheck } = this.props;
        const rowIndex = index + 1;
        const { clickedRowIndex } = this.state;

        // maybe TODO extract this - it's bad performance, due to re-creation all the time.
        const rowClickHandler = () => {
            this.rememberSelectedRow(rowIndex);
            previewCheck(rowIndex, rowData);
        };

        return (
            <Table.Row key={`row-${rowIndex}`} active={clickedRowIndex === rowIndex} onClick={rowClickHandler}>
                <Table.Cell>
                    <DropdownExampleUpward />
                </Table.Cell>
                <Table.Cell>{rowData.checkProfileName}</Table.Cell>
                <Table.Cell>{rowData.accountNumber}</Table.Cell>
                <Table.Cell>{rowData.bankName}</Table.Cell>
                <Table.Cell>{rowData.companyDivision}</Table.Cell>
            </Table.Row>
        );
    })

    render() {
        console.log("GridView - render");
        const { gridRowsData } = this.props;

        return (
            <div className="grid-container">
                <Table selectable size="small">
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
                        {gridRowsData.map((rowData, index) => this.showRows(rowData, index))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default GridView;
