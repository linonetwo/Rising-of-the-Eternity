import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import { AppWithProvider } from './App';

ReactDOM.render(<AppWithProvider />, document.querySelector('#root'));

export default hot(module)(AppWithProvider);
