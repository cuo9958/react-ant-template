import React from 'react';
import { Button, Input, Divider, message } from 'antd';
import './index.less';
import { LoginOutlined, UserOutlined, AlertOutlined } from '@ant-design/icons';
import { inject } from 'mobx-react';

interface IState {
    username: string;
    password: string;
}
@inject((models: any) => ({
    login: models.user.login,
}))
export default class extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    render() {
        return (
            <div id="login">
                <div className="box">
                    <div className="title">登录</div>
                    <Divider className="line" />
                    <div className="form">
                        <Input prefix={<UserOutlined />} onChange={this.setUserName} size="large" className="input_ctl" placeholder="请输入用户名" />
                        <Input.Password prefix={<AlertOutlined />} onChange={this.setPassword} size="large" className="input_ctl" placeholder="请输入密码" />
                    </div>
                    <div className="footer">
                        <Button onClick={this.login} size="large" type="primary" block>
                            登录
                            <LoginOutlined />
                        </Button>
                    </div>
                    <div className="other">
                        <small>注册请联系管理员</small>
                    </div>
                </div>
            </div>
        );
    }

    setUserName = (e: any) => {
        this.setState({ username: e.target.value });
    };
    setPassword = (e: any) => {
        this.setState({ password: e.target.value });
    };
    login = () => {
        console.log(this.state, this.props);
        if (!this.state.username) {
            return message.error('请填写用户名');
        }
        //request
        this.props.login();
        this.props.history.push('/');
    };
}
