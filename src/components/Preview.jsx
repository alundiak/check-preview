import React from 'react';
import { Divider, Image, Icon } from 'semantic-ui-react';
import AdjustImages from 'components/AdjustImages';
import Sample from 'components/Sample';

import img1 from 'images/check2_sample.gif';
import img2 from 'images/check2_change_1.gif';
import img3 from 'images/check2_change_2.gif';
import img4 from 'images/check2_change_3.gif';
import img5 from 'images/check2_change_4.gif';

const checkDesigns = {
    img1,
    img2,
    img3,
    img4,
    img5
};

class Preview extends React.Component {
    state = {
        showSample: false
    }

    toggleSample = () => {
        this.setState(prevState => ({
            showSample: !prevState.showSample
        }));
    }

    render() {
        const { showSample } = this.state;
        const { previewData, showAdjust, hideAdjustCallback } = this.props;
        const img = checkDesigns[`img${previewData.imgId}`] || img1;

        return (
            <div className="preview-container">
                <a href="#" onClick={this.toggleSample}>{showSample ? 'Hide' : 'Show'} sample</a>
                {showSample ? <Sample /> : null}
                <div className="preview-image">
                    <div className="layer">
                        <Image src={img} />
                        <div className="interactive-layer">

                            <div className="company-logo">
                                <Icon name="building" size="big" />
                            </div>

                            <div className="bank-logo">
                                <Icon name="bitcoin" size="big" />
                            </div>

                            <div className="micr-line">
                                <Divider />
                            </div>
                        </div>
                    </div>
                    <p className="preview-info">Lorem Ipsum ....</p>
                </div>

                {showAdjust ? <AdjustImages hideAdjustCallback={hideAdjustCallback} /> : null}

            </div>
        );
    }
}

export default Preview;
