import React from 'react';

interface IProps {
    location: any;
    match: any;
    history: any;
}
export default class Layout extends React.Component<IProps> {
    render() {
        return <div>{this.props.children}</div>;
    }
}
