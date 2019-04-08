import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
// import TestObj from 'components/Test';
// import { Test } from 'components/Test';
// import ReactColorSquare from 'react-color-square';
// import ReactSum from '@lundiak/react-sum';
// import { Count, Sum } from '@lundiak/react-sum';
// import ReactSum from 'reactSum'; // Using Webpack Alias DIRECTLY to node_modules

// TODO
// import 'semantic-ui-css/semantic.min.css';
// import 'semantic-ui-less/semantic.less';
// TODO
import 'css/app.less';

ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<Test />, document.getElementById('app'));

// ReactDOM.render(
//   <React.Fragment>
//     {/* <ReactColorSquare /> */}
//     {/* <ReactSum.Sum /> */}
//     {/* <ReactSum.Count /> */}
//     <Sum a={3} b={3} />
//     <Count list={[1, 2, 3]} />
//   </React.Fragment>,
//   document.getElementById('app')
// );

if (module.hot) {
  module.hot.accept();
}
