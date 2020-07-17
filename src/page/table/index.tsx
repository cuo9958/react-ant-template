import React from 'react';
import { Table } from 'antd';

interface IState {
    list: any[];
}

export default class extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
        };
    }
    columns: any = [
        {
            title: 'Full Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            fixed: false,
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            fixed: false,
        },
        {
            title: '操作',
            key: 'id',
            dataIndex: 'id',
            fixed: false,
            render: () => {
                return <div>操作</div>;
            },
        },
    ];
    render() {
        return (
            <div>
                <div>
                    <Table bordered dataSource={this.state.list} scroll={{ x: 1300 }} columns={this.columns}></Table>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const list: any[] = [];
        for (let index = 0; index < 30; index++) {
            list.push({
                id: index,
                name: '测试name',
                age: index,
                address: '地址内容',
            });
        }
        this.setState({ list });
    }
}
