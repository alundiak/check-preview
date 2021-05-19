import React from 'react';
import axios from 'axios';
import { Image, Dropdown } from 'semantic-ui-react';
import checkDesignImage from '../images/check_design_1.gif';
import checkDesignPdf from '../images/check_design_1.pdf';

const dropDownOptions = [
    { key: 1, text: 'Image <img> + url', value: 'img' },
    { key: 2, text: 'PDF <embed> + url', value: 'embed' },
    { key: 3, text: 'PDF <object> + data', value: 'object' },
    { key: 4, text: 'PDF <object> + fetch + blob', value: 'blob' },
];

class CheckDesign extends React.Component {
    state = {
        // type used by Dropdown as value and render() as key to switch
        type: this.props.type, //eslint-disable-line
        fetchedUrlPdf: ''
    }

    componentDidMount() {
        console.log('CheckDesign - componentDidMount');
        const { type } = this.props;
        if (type === 'blob') {
            this.fetchBlob();
        }
    }

    fetchBlob = () => {
        console.log('fetchBlob');

        axios({
            url: checkDesignPdf,
            method: 'GET',
            headers: {},
            responseType: 'blob'
        })
            .then((response) => {
                this.setState({
                    fetchedUrlPdf: URL.createObjectURL(response.data)
                });
            })
            .catch((error) => {
                console.log('ERROR ', error);
            });
    }

    handleDropdownChange = (e, { value }) => {
        this.setState({
            type: value
        }, () => {
            if (value === 'blob') {
                this.fetchBlob();
            }
        });
    }

    render() {
        const { type, fetchedUrlPdf } = this.state;

        /* eslint jsx-a11y/alt-text: 0 */
        /* eslint react/jsx-closing-tag-location: 0 */
        /* eslint react/self-closing-comp: 0 */
        const rendersCode = {
            img: (<Image src={checkDesignImage} />),
            embed: (<embed
                src={`${checkDesignPdf}#view=FitW&scrollbar=0&toolbar=0&statusbar=0&navpanes=0&zoom=0`}
                type="application/pdf"
                width="510"
                height="225" />),
            object: (<object
                data={`${checkDesignPdf}#view=FitW&scrollbar=0&toolbar=0&statusbar=0&navpanes=0&zoom=0`}
                type="application/pdf"
                width="510"
                height="225"></object>),
            blob: (<object
                data={`${fetchedUrlPdf}#view=FitW&scrollbar=0&toolbar=0&statusbar=0&navpanes=0&zoom=0`}
                type="application/pdf"
                width="510"
                height="225"></object>)
        };

        return (
            <React.Fragment>
                {rendersCode[type]}

                <Dropdown
                    size="mini"
                    onChange={this.handleDropdownChange}
                    options={dropDownOptions}
                    placeholder="Choose the design approach"
                    selection
                    value={type}
                />
            </React.Fragment>
        );
    }
}

export default CheckDesign;