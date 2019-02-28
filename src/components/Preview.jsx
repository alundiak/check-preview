import React from 'react';
import { Divider, Image, Icon, Input, Button } from 'semantic-ui-react';

import sampleImg from 'images/sample.png';
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
        styles: {
            display: 'none'
        }
    }

    handleSampleClick = () => {
        this.setState({
            styles: {
                display: 'block'
            }
        })
    }

    render() {
        const { styles } = this.state;
        const { previewData } = this.props;
        const img = checkDesigns[`img${previewData.imgId}`] || img1;

        return (
            <div className="preview-container">
                <div className="sample">
                    <Image src={sampleImg} style={styles}/>
                    <a href="#" onClick={this.handleSampleClick}>Show sample</a>
                </div>
                <div className="preview-image">

                    <div className="layer">
                        <Image src={img} />
                        <div className="interactive-layer">
                            
                            <div className="company-logo">
                                <Icon name="building" size="big"/>
                            </div>

                            <div className="bank-logo">
                                <Icon name="bitcoin" size="big"/>
                            </div>

                            <div className="micr-line">
                                <Divider/>
                            </div>
                        </div>
                    </div>
                    <p className="preview-info">Lorem Ipsum ....</p>
                </div>

                <div className="adjust-images">
                    <div className="adjust-block">
                        <h4>MICR Line</h4>
                        <div>
                            <Icon name="arrow up"/>
                            <Icon name="arrow down"/>
                            <Input type="number" size='mini' placeholder='vertical position' />
                        </div>

                        <div>
                            <Icon name="arrow left"/>
                            <Icon name="arrow right"/>
                            <Input type="number" size='mini' placeholder='horizontal position' />
                        </div>
                    </div>
                    
                    <div className="adjust-block">
                        <h4>Company logo</h4>
                        <div>
                            <Icon name="arrow up"/>
                            <Icon name="arrow down"/>
                            <Input type="number" size='mini'/>
                        </div>

                        <div>
                            <Icon name="arrow left"/>
                            <Icon name="arrow right"/>
                            <Input type="number" size='mini'/>
                        </div>
                    </div>  

                    <div className="adjust-block">
                        <h4>Bank logo</h4>
                        <div>
                            <Icon name="arrow up"/>
                            <Icon name="arrow down"/>
                            <Input type="number" size='mini'/>
                        </div>

                        <div>
                            <Icon name="arrow left"/>
                            <Icon name="arrow right"/>
                            <Input type="number" size='mini'/>
                        </div>
                    </div>  
                    
                    <div className="save-and-preview">
                        <Button primary>Save & Preview</Button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Preview;
