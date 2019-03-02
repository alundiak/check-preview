import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import AdjustImages from 'components/AdjustImages';
import Sample from 'components/Sample';

import checkDesignImage from 'images/check_design_1.gif';
import micrLineImage from 'images/micr_line.png';
import signatureImage from 'images/signature.png';

class Preview extends React.Component {
    state = {
        showSample: false,
        previewData: this.props.previewData || {} //eslint-disable-line
    }

    toggleSample = () => {
        this.setState(prevState => ({
            showSample: !prevState.showSample
        }));
    }

    passAdjustImagesState = (adjustImagesState) => {
        this.setState(prevState => ({
            previewData: Object.assign(prevState.previewData, adjustImagesState)
        }));
    }

    render() {
        const { showSample, previewData } = this.state;
        const { showAdjust, hideAdjustCallback } = this.props;

        const { previewCheckProfile } = previewData;

        const styles = {
            micrLine: {
                top: `${previewData.micrLineV}px`,
                left: `${previewData.micrLineH}px`
            },
            companyLogo: {
                top: `${previewData.companyLogoV}px`,
                left: `${previewData.companyLogoH}px`
            },
            bankLogo: {
                top: `${previewData.bankLogoV}px`,
                left: `${previewData.bankLogoH}px`
            },
            signature: {
                top: `${previewData.signatureV}px`,
                left: `${previewData.signatureH}px`
            }
        };

        return (
            <div className="preview-container">
                <div>
                    <a href="#" onClick={this.toggleSample}>{showSample ? 'Hide' : 'Show'} sample</a>
                    <span className="preview-check-profile">
                        Previewing: <span>{previewCheckProfile}</span>
                    </span>
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
                        initialPreviewData={previewData}
                        hideAdjustCallback={hideAdjustCallback}
                        passAdjustImagesState={this.passAdjustImagesState}
                    />
                ) : null}

            </div>
        );
    }
}

export default Preview;
