import React from 'react';
import { Layout, Menu } from 'antd';
import './index.less';
import routes from '../../routes/config';

const { Header, Content, Sider } = Layout;

interface IProps {
    location: any;
    match: any;
    history: any;
    active: string;
}
export default class extends React.Component<IProps> {
    render() {
        return (
            <Layout id="main">
                <Sider className="menus" breakpoint="lg" collapsed={false}>
                    <Menu theme="dark" defaultSelectedKeys={[this.props.active]} mode="inline" onClick={(e) => this.onMenu(e)}>
                        {routes.map((item: any) => (
                            <Menu.Item key={item.path}>{item.title}</Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout className="container">
                    {/* <Header className="header">标题</Header> */}
                    <Content className="contents">{this.props.children}</Content>
                </Layout>
            </Layout>
        );
    }

    onMenu(e: any) {
        this.props.history.push(e.key);
    }
}
