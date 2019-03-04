import React from 'react';
import { Image, Icon, Label, Button } from 'semantic-ui-react';
import AdjustImages from 'components/AdjustImages';
import Sample from 'components/Sample';

import checkDesignImage from 'images/check_design_1.gif';
import micrLineImage from 'images/micr_line.png';
import signatureImage from 'images/signature.png';
import checkPdfFile from 'images/check.pdf';

// if PureComponent, then when Preview.state changed, component IS NOT re-rendered
// If Component, then re-rendered when state changed AND when props changed.
class Preview extends React.Component {
    constructor(props) {
        console.log('Preview - constructor');
        super(props);
        const { previewData } = this.props;
        this.state = {
            showSample: false,
            previewData
        };
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps, nextState);
    //     return true;
    // }

    // TEST - must work on Grid Row Click only !!!
    componentWillReceiveProps(nextProps) {
        console.log('Preview - componentWillReceiveProps');
        // This will erase any local state updates!
        // Do not do this.
        // Latest - nextProps contains same data whish is already in state.
        // But it is the same when state changed. When props changed, it really helps here.
        this.setState({ previewData: nextProps.previewData });
    }

    showSampleHandler = () => {
        this.setState({
            showSample: true
        });
    }   
    
    // hideSampleHandler = () => {
    //     this.setState({
    //         showExample: false
    //     });
    // }

    passAdjustImagesState = (adjustImagesState) => {
        this.setState((prevState) => {
            const { previewData: prevPreviewData } = prevState;
            Object.assign(prevPreviewData.adjustData, adjustImagesState);

            return {
                previewData: prevPreviewData
            };
        });
    }

    // getDerivedStateFromProps is invoked right before calling the render method,
    // both on the initial mount and on subsequent updates.
    // It should return an object to update the state, or null to update nothing.

    // static getDerivedStateFromProps(props, state){}

    render() {
        console.log("Preview - render");
        const { showSample, previewData: previewDataFromState } = this.state;
        const { showAdjust, hideAdjustCallback, clearPreviewDataCallback, previewData: previewDataFromProps } = this.props; // eslint-disable-line

        const { checkProfileName, adjustData } = previewDataFromState;

        const styles = {
            micrLine: {
                top: `${adjustData.micrLineV}px`,
                left: `${adjustData.micrLineH}px`
            },
            companyLogo: {
                top: `${adjustData.companyLogoV}px`,
                left: `${adjustData.companyLogoH}px`
            },
            bankLogo: {
                top: `${adjustData.bankLogoV}px`,
                left: `${adjustData.bankLogoH}px`
            },
            signature: {
                top: `${adjustData.signatureV}px`,
                left: `${adjustData.signatureH}px`
            }
        };

        return (
            <div className="preview-container">
                <div>
                    <Button
                        positive
                        size="mini"
                        content="Show Sample"
                        onClick={this.showSampleHandler}
                    />
                    <div className="preview-check-profile">
                        Previewing: <Label as="a" color="teal" tag>{checkProfileName}</Label>
                    </div>
                </div>

                {showSample ? <Sample showSample={showSample} /> : null}

                <div className="preview-image">
                    <div className="layer">
                        <Image src={checkDesignImage} />

                        <embed 
                            src={`${checkPdfFile}#view=Fit&scrollbar=0&toolbar=0&statusbar=0navpanes=0`} 
                            width="500" 
                            height="375" 
                            type="application/pdf"></embed>

                        <div className="interactive-layer">
                            <div className="company-logo" style={styles.companyLogo}>
                                <Icon name="building" size="big" />
                            </div>

                            <div className="bank-logo" style={styles.bankLogo}>
                                <Icon name="bitcoin" size="big" />
                            </div>

                            <div className="micr-line" style={styles.micrLine}>
                                <Image src={micrLineImage} />
                            </div>

                            <div className="signature" style={styles.signature}>
                                <Image src={signatureImage} />
                            </div>
                        </div>
                    </div>
                    <p className="preview-info">Lorem Ipsum ....</p>
                </div>

                {showAdjust ? (
                    <AdjustImages
                        initialAdjustData={adjustData}
                        hideAdjustCallback={hideAdjustCallback}
                        clearPreviewDataCallback={clearPreviewDataCallback}
                        passAdjustImagesState={this.passAdjustImagesState}
                    />
                ) : null}

            </div>
        );
    }
}

export default Preview;
