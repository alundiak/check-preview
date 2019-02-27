import React from 'react';
// import { Divider } from 'semantic-ui-react';
import Preview from 'components/Preview';
import GridView from 'components/GridView';
// import GridItem from './components/GridItem';

export default function App(/* props */) {
    return (
        <div className="app-container">
            <h2>New Check Application</h2>
            <Preview />
            {/* <Divider /> */}
            <h3>Check Profiles</h3>
            <GridView />
        </div>
    );
}