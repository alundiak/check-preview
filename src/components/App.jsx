import React from 'react';
import Preview from 'components/Preview';
import GridView from 'components/GridView';
// import GridItem from './components/GridItem';
import { Icon, Input } from 'semantic-ui-react';

class App extends React.Component {
    state = {
        showAdjust: false,
        previewData: {
            imgId: 1
        }
    }

    handleAdjust = () => {
        this.setState({
            showAdjust: true,
            previewData: {} // TODO
        });
    }
    
    hideAdjustCallback = () => {
        this.setState({
            showAdjust: false
        });
    }

    previewCheck = (rowId) => { // so far after row click, artificially rowId => imgId
        // const previewData = {}; // assumed to get new data from Grid Row
        this.setState({
            previewData: {
                imgId: rowId  
            }
        });
    }

    render() {
        const { showAdjust, previewData } = this.state;

        return (
            <div className="app-container">
                <Input type="number" />
                <h2>New Check Application</h2>
                <Preview
                    previewData={previewData}
                    showAdjust={showAdjust}
                    hideAdjustCallback={this.hideAdjustCallback}
                />

                <div>
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