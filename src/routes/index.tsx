import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Layout from '../page/layout';
import configs from './config';

const Main = withRouter((component) => <Layout {...component} />);

export default function () {
    return (
        <Main>
            <Switch>
                {configs.map((item) => (
                    <Route key={item.name} path={item.path} exact={!!item.exact} component={item.page} />
                ))}
            </Switch>
        </Main>
    );
}
