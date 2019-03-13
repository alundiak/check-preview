import React from 'react';
import ReactDOM from 'react-dom';

// import App from 'components/App';
// import TestObj from 'components/Test';
import { Test } from 'components/Test';

// TODO
// import 'semantic-ui-css/semantic.min.css';
// import 'semantic-ui-less/semantic.less';
// TODO

import 'css/app.less';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Test />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
