import React from 'react';
import Preview from 'components/Preview';
import GridView from 'components/GridView';
// import GridItem from './components/GridItem';
import { Container, Icon } from 'semantic-ui-react';

import { gridRowsData } from 'components/data';

class App extends React.Component {
    state = {
        showAdjust: false,
        previewData: gridRowsData[0] // TODO - maybe it's wrong to have default logic
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
                        gridRowsData={gridRowsData}
                        previewCheck={this.previewCheck}
                    />
                </div>
            </Container>
        );
    }
}

export default App;