import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../page/layout';
import configs from './config';

export default function () {
    return (
        <Switch>
            {configs.map((item) => (
                <Route
                    key={item.name}
                    path={item.path}
                    exact={!!item.exact}
                    component={(props: any) => {
                        if (item.layout)
                            return (
                                <Layout {...props}>
                                    <item.page {...props} />
                                </Layout>
                            );
                        return <item.page {...props} />;
                    }}
                />
            ))}
        </Switch>
    );
}
