import React from 'react';
import { Button, Pagination, List } from 'antd';

import './index.less';

interface IState {
    list: any[];
}
export default class extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        };
    }
    render() {
        return (
            <div id="list">
                <div className="list_box">
                    <List bordered={true} dataSource={this.state.list} renderItem={this.renderItem}></List>
                </div>
                <div className="list_footer">
                    <Pagination onChange={this.onPageChange} defaultCurrent={1} pageSize={10} total={200} showSizeChanger={false} />
                </div>
            </div>
        );
    }
    renderItem = (item: any) => {
        return (
            <List.Item className="list_item">
                <div className="list_th">
                    <div className="list_td">标题{item}</div>
                    <div className="list_td">内容{item}</div>
                    <div className="list_td list_auto">长内容长内容长内容长内容长内容{item}</div>
                    <div className="list_td">内容{item}</div>
                    <div className="list_td">内容{item}</div>
                    <div className="list_td">
                        <Button.Group>
                            <Button type="primary">编辑</Button>
                            <Button className="btn_del" type="primary">
                                删除
                            </Button>
                        </Button.Group>
                    </div>
                </div>
            </List.Item>
        );
    };
    /**
     * 点击页面跳转
     * @param page 页码，从1开始
     */
    onPageChange = (page: number) => {
        console.log(page);
    };
}
