import React from 'react';
import { Image } from 'semantic-ui-react';
import sampleImg from '../images/sample.png';

class Sample extends React.Component {
    state = {
        ...this.props
    }

    clickHandler = () => {
        this.setState({
            showSample: false
        }, this.props.hideSampleHandler); //eslint-disable-line
    }

    render() {
        console.log('Sample - render');

        const { showSample } = this.state;

        const styles = {
            visibility: showSample ? 'visible' : 'hidden',
            opacity: showSample ? 1 : 0
        };

        /* eslint jsx-a11y/click-events-have-key-events: 0 */
        /* eslint jsx-a11y/no-static-element-interactions: 0 */
        /* eslint jsx-a11y/aria-role: 0 */
        return (
            <div className="overlay" title="Click to close" style={styles} onClick={this.clickHandler}>
                <div className="sample">
                    <Image src={sampleImg} />
                </div>
            </div>
        );
    }
}

export default Sample;