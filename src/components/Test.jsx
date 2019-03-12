// Test Component to represent  how React.Component and React.PureComponent differs.
// Also was trying to test passing props by reference and via destructing
import React from 'react';

class ChildComponent extends React.Component {
    render() {
        console.log('ChildComponent render');

        // const { childData } = this.props;
        const { field1, field2 } = this.props;
        return (
            <div style={{ border: '1px dotted red', margin: '20px' }}>
                {/* {JSON.stringify(childData)} */}
                ChildComponent (data from props): {field1} {field2}
            </div>
        );
    }
}

class ParentComponent extends React.Component {
    state = {
        parentData: 'data from ParentComponent state.',
        childData: null,
        counter: 0
    };

    changeData = (event) => {
        const { value } = event.target;

        this.setState({
            counter: this.state.counter + 1,
            // childData: {!this.state.childData}, // also works when passed by reference?
            childData: {
                field1: 'abc ' + value,
                field2: 123 + this.state.counter + 1
            }
        });
    };

    render() {
        console.log('ParentComponent render');
        const { parentData, childData } = this.state;
        return (
            <div style={{ border: '1px dashed green', margin: '20px' }}>
                <p>Parent data:</p>
                <div>{parentData}</div>
                {/* <button onClick={this.changeData}>Click me</button> */}
                <label>Select me</label>
                <select name="parentSelector" onChange={this.changeData}>
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

class Test extends React.Component {
    render() {
        console.log('Test render');

        return (
            <ParentComponent />
        );
    }
}

export default Test;