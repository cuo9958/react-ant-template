import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter } from 'react-router-dom';
import stores from './models';
import Routes from './routes';

import './index.less';

function Render() {
    return (
        <Provider {...stores}>
            <HashRouter>{Routes()}</HashRouter>
        </Provider>
    );
}

ReactDOM.render(<Render />, document.getElementById('root'));
