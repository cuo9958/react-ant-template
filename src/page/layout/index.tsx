import React from 'react';
import './index.less';

interface IProps {
    location: any;
    match: any;
    history: any;
}
export default class Layout extends React.Component<IProps> {
    render() {
        return (
            <div id="main">
                <header>标题</header>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
