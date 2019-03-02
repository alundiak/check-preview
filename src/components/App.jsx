import React from 'react';
import Preview from 'components/Preview';
import GridView from 'components/GridView';
// import GridItem from './components/GridItem';
import { Icon } from 'semantic-ui-react';

// TODO - grab from Grid
const gridData = [
    {
        bankLogoH: 10,
        bankLogoV: 140,
        companyLogoH: 10,
        companyLogoV: 20,
        micrLineH: 15,
        micrLineV: 195,
        signatureH: 340,
        signatureV: 153,
        previewCheckProfile: 'test'
    }
];

class App extends React.Component {
    state = {
        showAdjust: false,
        previewData: gridData[0] // TODO dynamic, based on rowId
    }

    // TODO
    // saveAdjustDataCallback = (adjustData) => {
    //     console.log(adjustData);

    //     this.setState(prevState, ({
    //         showAdjust: true,
    //         previewData: Object.assign(prevState.previewData, adjustData)
    //     }));
    // }

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

    previewCheck = (/* rowId */) => { // so far after row click, artificially rowId => imgId
        // const previewData = {}; // assumed to get new data from Grid Row
        this.setState({
            previewData: gridData[0] // rowId
        });
    }

    render() {
        const { showAdjust, previewData } = this.state;

        return (
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
                    previewCheck={this.previewCheck}
                />
            </div>
        );
    }
}

export default App;