import React from 'react';
import { Image, Icon } from 'semantic-ui-react';

import img1 from 'images/check2.gif';

const Preview = () => (
    <div className="preview-container">
        <div className="preview-image">
            <Image src={img1} />
            <p className="preview-info">Lorem Ipsum ....</p>
        </div>
        <div>
            <Icon name="edit" />
            <a href="#adjust">Adjust (v2)</a>
            &nbsp;
            <Icon name="print" />
            <a href="#print">Print (v2)</a>
        </div>
    </div>
);

export default Preview;
