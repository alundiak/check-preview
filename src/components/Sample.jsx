import React from 'react';
import { Image } from 'semantic-ui-react';

import sampleImg from 'images/sample.png';

class Sample extends React.Component {
    render() {
        return (
            <div className="sample">
                <Image src={sampleImg} />
            </div>
        );
    }
}

export default Sample;