import React from 'react';
import { Image, Icon, Label, Button } from 'semantic-ui-react';
import AdjustImages from 'components/AdjustImages';
import Sample from 'components/Sample';

import checkDesignImage from 'images/check_design_1.gif';
import micrLineImage from 'images/micr_line.png';
import signatureImage from 'images/signature.png';

class Preview extends React.PureComponent {
    constructor(props){
        console.log("Preview - constructor");
        super(props);
        this.state = {
            showSample: false,
            previewData: this.props.previewData || {} //eslint-disable-line
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps, nextState);
    //     return true;
    // }

    toggleSample = () => {
        this.setState(prevState => ({
            showSample: !prevState.showSample
        }));
    }

    passAdjustImagesState = (adjustImagesState) => {
        this.setState(prevState => {
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
        const { showAdjust, hideAdjustCallback, previewData } = this.props;

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
                        toggle
                        size="mini"
                        active={!showSample}
                        onClick={this.toggleSample}>{showSample ? 'Hide' : 'Show'} sample
                    </Button>
                    <div className="preview-check-profile">
                        Previewing: <Label as="a" color="teal" tag>{checkProfileName}</Label>
                    </div>
                </div>

                {showSample ? <Sample /> : null}

                <div className="preview-image">
                    <div className="layer">
                        <Image src={checkDesignImage} />
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
                        passAdjustImagesState={this.passAdjustImagesState}
                    />
                ) : null}

            </div>
        );
    }
}

export default Preview;
