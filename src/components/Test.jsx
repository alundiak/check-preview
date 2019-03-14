// Test Component to represent  how React.Component and React.PureComponent differs.
// Also was trying to test passing props by reference and via destructing
/* eslint react/no-multi-comp: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */

import React from 'react';
import '../css/test.less';

export class ChildComponent extends React.Component {
    render() {
        console.log('ChildComponent render');

        // const { childData } = this.props;
        const { field1, field2 } = this.props;
        return (
            <div className="test child">
                {/* {JSON.stringify(childData)} */}
                ChildComponent (data from props): {field1} {field2}
            </div>
        );
    }
}

export class ParentComponent extends React.Component {
    state = {
        parentData: 'data from ParentComponent state.',
        childData: null,
        counter: 0
    };

    changeData = (event) => {
        const { value } = event.target;
        const { counter } = this.state;

        this.setState({
            counter: counter + 1,
            // childData: {!this.state.childData}, // also works when passed by reference?
            childData: {
                field1: `abc ${value}`,
                field2: 123 + counter + 1
            }
        });
    };

    render() {
        console.log('ParentComponent render');
        const controlId = 'parentSelector';
        const { parentData, childData } = this.state;
        return (
            <div className="test parent">
                <p>Parent data:</p>
                <div>{parentData}</div>
                {/* <button onClick={this.changeData}>Click me</button> */}
                <label htmlFor={controlId}>Select me</label>
                {/* using htmlFor still doesn't suppress eslint warning !!! */}
                <select id={controlId} name="parentSelector" onChange={this.changeData}>
                    <option value="option1">Option1</option>
                    <option value="option2">Option2</option>
                </select>

                <p>Child data:</p>
                <div>
                    {/* <ChildComponent childData={childData} /> */}
                    <ChildComponent {...childData} />
                </div>
            </div>
        );
    }
}

export class Test extends React.Component {
    render() {
        console.log('Test render');

        return (
            <div className="test">
                <ParentComponent />
            </div>
        );
    }
}


export default {
    ParentComponent,
    ChildComponent,
    Test
};