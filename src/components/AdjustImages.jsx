import React from 'react';
import { Icon, Input, Button, Form } from 'semantic-ui-react';

class AdjustImages extends React.Component {

    state = {
        micrLine: {
           v: "2",
           h: "5" 
        }, // expected to ahve 2 values: 0 - vertical position, 1 - horisontal position. Will be used to adjust pixels.
        companyLogo: [2, 6],
        bankLogo: [10, 4]
    }

    render() {
        const { micrLine, companyLogo, bankLogo } = this.state;
        const { hideAdjustCallback } = this.props;

        return (
            <div className="adjust-images">
                <div className="adjust-block">

                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='First name' placeholder='First name' type="number" value={micrLine.h} />
                            <Form.Input fluid label='Last name' placeholder='Last name' value="234" />
                        </Form.Group>
                        
                        <Form.Field>
                            <label>RAW First Name</label>
                            <input type="number" value="5" />
                        </Form.Field>
                    </Form>

                    <h4>MICR Line</h4>
                    <div>
                        <Icon name="arrow up" />
                        <Icon name="arrow down" />
                        <Input type="number" size="mini" placeholder="vertical position" value="212352" />
                    </div>

                    <div>
                        <Icon name="arrow left" />
                        <Icon name="arrow right" />
                        <Input type="number" size="mini" placeholder="horizontal position" value={micrLine.h} />
                    </div>
                </div>

                <div className="adjust-block">
                    <h4>Company logo</h4>
                    <div>
                        <Icon name="arrow up" />
                        <Icon name="arrow down" />
                        <Input type="number" size="mini" value={companyLogo[0]} />
                    </div>

                    <div>
                        <Icon name="arrow left" />
                        <Icon name="arrow right" />
                        <Input type="number" size="mini" value={companyLogo[1]} />
                    </div>
                </div>

                <div className="adjust-block">
                    <h4>Bank logo</h4>
                    <div>
                        <Icon name="arrow up" />
                        <Icon name="arrow down" />
                        <Input type="number" size="mini" value={bankLogo[0]} />
                    </div>

                    <div>
                        <Icon name="arrow left" />
                        <Icon name="arrow right" />
                        <Input type="number" size="mini" value={bankLogo[1]} />
                    </div>
                </div>

                <div className="save-and-preview">
                    <Button primary onClick={hideAdjustCallback}>Save</Button>
                </div>
            </div>
        );
    }
}

export default AdjustImages;