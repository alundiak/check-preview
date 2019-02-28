import React from 'react';
import Preview from 'components/Preview';
import GridView from 'components/GridView';
// import GridItem from './components/GridItem';
import { Icon } from 'semantic-ui-react';

class App extends React.Component {
    state = {
        previewData: {
            imgId: 1
        }
    }

    handleAdjust = () => {
        this.setState({
            previewData: {
                data: 'requiresAdjust',
                imgId: 5
            }
        });
    }

    handlePrint = () => {
        this.setState({
            previewData: {
                data: 'requiresPrint',
                imgId: 3
            }
        });
    }

    previewCheck = (rowId) => { // so far after row click, artificially rowId => imgId
        this.setState({
            previewData: {
                data: 'triggersPreview', // assumed to get new data from Grid Row
                imgId: rowId
            }
        });
    }

    render() {
        const { previewData } = this.state;

        return (
            <div className="app-container">
                <h2>New Check Application</h2>
                <Preview
                    handleAdjust={this.handleAdjust}
                    handlePrint={this.handlePrint}
                    previewData={previewData}
                />

                <div>
                    <Icon name="edit" />
                    <a href="#adjust" onClick={this.handleAdjust}>Adjust</a>
                    &nbsp;
                    <Icon name="print" />
                    <a href="#print" onClick={this.handlePrint}>Print</a>
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