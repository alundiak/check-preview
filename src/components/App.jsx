import React from 'react';
import Preview from 'components/Preview';
import GridView from 'components/GridView';
// import GridItem from './components/GridItem';
import { Container, Icon } from 'semantic-ui-react';

import { gridRowsData } from 'components/data';

class App extends React.Component {
    state = {
        showAdjust: false,
        selectedRowIndex: 1, // alternative (human-readable index from grid rows)
        previewData: {
            ...gridRowsData[0] // TODO - maybe it's wrong to have default logic
        }
    }

    handleAdjust = () => {
        this.setState({
            showAdjust: true
        });
    }

    hideAdjustCallback = () => { // just close, no saving
        this.setState({
            showAdjust: false
        });
    }

    clearPreviewDataCallback = () => {
        const { selectedRowIndex } = this.state;

        this.setState({
            previewData: gridRowsData[selectedRowIndex - 1] // have to clear to previously clicked row - TODO !!!
        });
    }

    propagateSelectedRow = (selectedRowIndex) => { //eslint-disable-line
        this.setState({
            selectedRowIndex
        });
    }

    previewCheck = (rowIndex, rowData) => {
        // assuming new data from Grid Row
        this.setState({
            previewData: rowData
        });
    }

    render() {
        console.log("App - render");
        const { showAdjust, previewData } = this.state;

        return (
            <Container>
                <div className="app-container">
                    <h2>New Check Application</h2>
                    <Preview
                        previewData={previewData}
                        showAdjust={showAdjust}
                        hideAdjustCallback={this.hideAdjustCallback}
                        clearPreviewDataCallback={this.clearPreviewDataCallback}
                    />

                    <div className="controls">
                        <Icon name="edit" />
                        <a href="#adjust" onClick={this.handleAdjust}>Adjust</a>
                        &nbsp;
                        <Icon name="print" />
                        <a href="#print">Print</a>
                    </div>

                    <h3>Check Profiles</h3>
                    <GridView
                        gridRowsData={JSON.parse(JSON.stringify(gridRowsData))}
                        previewCheck={this.previewCheck}
                        propagateSelectedRow={this.propagateSelectedRow}
                    />
                </div>
            </Container>
        );
    }
}

export default App;