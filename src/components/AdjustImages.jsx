import React from 'react';
import { Icon, Input, Button } from 'semantic-ui-react';

class AdjustImages extends React.Component {
    constructor(props){
        super(props);
        console.log("AdjustImages  - constructor", props);
        this.state = {
            ...props.initialAdjustData //eslint-disable-line
        }

    }
    collectAdjustDataAndSave = () => {
        const { ...collectedState } = this.state;
        const { passAdjustImagesState } = this.props;

        return passAdjustImagesState(collectedState);
    }

    inputOnChangeHandler = (e, { name, value }) => {
        this.setState({ [name]: value }, () => {
            this.collectAdjustDataAndSave(); // causes 3 rendering: AdjustImages, Preview, AdjustImages
        });
    }

    saveAndClose = () => {
        this.collectAdjustDataAndSave();
        this.props.hideAdjustCallback(); //eslint-disable-line
    }

    render() {
        console.log("AdjustImages - render");
        const {
            companyLogoV, companyLogoH,
            bankLogoV, bankLogoH,
            micrLineV, micrLineH,
            signatureV, signatureH
        } = this.state;

        const { hideAdjustCallback } = this.props;

        return (
            <div className="adjust-images">
                <div className="adjust-block">
                    <h4>Company logo</h4>
                    <div>
                        <Icon name="arrow up" />
                        <Icon name="arrow down" />
                        <Input
                            type="number"
                            size="mini"
                            name="companyLogoV"
                            value={companyLogoV}
                            onChange={this.inputOnChangeHandler}
                        />
                    </div>

                    <div>
                        <Icon name="arrow left" />
                        <Icon name="arrow right" />
                        <Input
                            type="number"
                            size="mini"
                            name="companyLogoH"
                            value={companyLogoH}
                            onChange={this.inputOnChangeHandler}
                        />
                    </div>
                </div>

                <div className="adjust-block">
                    <h4>Bank logo</h4>
                    <div>
                        <Icon name="arrow up" />
                        <Icon name="arrow down" />
                        <Input
                            type="number"
                            size="mini"
                            name="bankLogoV"
                            value={bankLogoV}
                            onChange={this.inputOnChangeHandler}
                        />
                    </div>

                    <div>
                        <Icon name="arrow left" />
                        <Icon name="arrow right" />
                        <Input
                            type="number"
                            size="mini"
                            name="bankLogoH"
                            value={bankLogoH}
                            onChange={this.inputOnChangeHandler}
                        />
                    </div>
                </div>

                <div className="adjust-block">
                    <h4>MICR Line</h4>
                    <div>
                        <Icon name="arrow up" />
                        <Icon name="arrow down" />
                        <Input
                            type="number"
                            size="mini"
                            placeholder="vertical position"
                            name="micrLineV"
                            value={micrLineV}
                            onChange={this.inputOnChangeHandler}
                        />
                    </div>

                    <div>
                        <Icon name="arrow left" />
                        <Icon name="arrow right" />
                        <Input
                            type="number"
                            size="mini"
                            placeholder="horizontal position"
                            name="micrLineH"
                            value={micrLineH}
                            onChange={this.inputOnChangeHandler}
                        />
                    </div>
                </div>

                <div className="adjust-block">
                    <h4>Signature</h4>
                    <div>
                        <Icon name="arrow up" />
                        <Icon name="arrow down" />
                        <Input
                            type="number"
                            size="mini"
                            name="signatureV"
                            value={signatureV}
                            onChange={this.inputOnChangeHandler}
                        />
                    </div>

                    <div>
                        <Icon name="arrow left" />
                        <Icon name="arrow right" />
                        <Input
                            type="number"
                            size="mini"
                            name="signatureH"
                            value={signatureH}
                            onChange={this.inputOnChangeHandler}
                        />
                    </div>
                </div>

                <div className="adjust-block save-and-preview">
                    <Button.Group>
                        <Button onClick={hideAdjustCallback}>Close</Button>
                        <Button.Or text="or" />
                        <Button primary onClick={this.saveAndClose}>Save</Button>
                    </Button.Group>
                </div>
            </div>
        );
    }
}

export default AdjustImages;