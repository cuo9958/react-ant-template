import React from 'react';
import { Layout, Menu, Avatar, Button } from 'antd';
import './index.less';
import routes from '../../routes/config';

const { Content, Sider } = Layout;

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
                        {routes.map((item) => !item.hide && <Menu.Item key={item.path}>{item.title}</Menu.Item>)}
                    </Menu>
                </Sider>
                <Layout className="container">
                    <div className="header">
                        <Avatar className="avatar">管</Avatar>
                        <Button onClick={() => this.logout()} className="logout" size="small" type="primary">
                            注销
                        </Button>
                    </div>
                    <Content className="contents">{this.props.children}</Content>
                </Layout>
            </Layout>
        );
    }

    onMenu(e: any) {
        this.props.history.push(e.key);
    }

    logout() {
        this.props.history.push('/login');
    }
}
