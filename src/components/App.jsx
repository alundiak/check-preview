import React from 'react';
// import Grid from './components/Grid';
// import GridItem from './components/GridItem';
// import Preview from './components/Preview';

class App extends React.Component {
    state = {
        abc: 'Hello'
    }
    
    render() {
        const { abc } = this.state;
        
        return (
            <div>
                {abc}
            </div>
        );
    }
}

export default App;