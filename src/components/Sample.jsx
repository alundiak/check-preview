import React from 'react';
import { Image } from 'semantic-ui-react';

import sampleImg from 'images/sample.png';

class Sample extends React.Component {
    state = {
        ...this.props
    }

    clickHandler = () => {
        this.setState({
            showSample: false
        });
    }

    render() {
        const { showSample } = this.state;

        const styles = {
            visibility: showSample ? 'visible' : 'hidden',
            opacity: showSample ? 1 : 0
        }

        return (
            <div className="overlay" style={styles} onClick={this.clickHandler}>
                <div className="sample">
                    <Image src={sampleImg} />
                </div>
            </div>
        );
    }
}

export default Sample;