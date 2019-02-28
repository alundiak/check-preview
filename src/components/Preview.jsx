import React from 'react';
import { Image, Icon } from 'semantic-ui-react';

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
    render() {
        const { handleAdjust, handlePrint, previewData } = this.props;
        const img = checkDesigns[`img${previewData.imgId}`] || img1;

        return (
            <div className="preview-container">
                <div className="preview-image">
                    <Image src={img} />
                    <p className="preview-info">Lorem Ipsum ....</p>
                </div>
                <div>
                    <Icon name="edit" />
                    <a href="#adjust" onClick={handleAdjust}>Adjust (v2)</a>
                    &nbsp;
                    <Icon name="print" />
                    <a href="#print" onClick={handlePrint}>Print (v2)</a>
                </div>
            </div>
        );
    }
}

export default Preview;
