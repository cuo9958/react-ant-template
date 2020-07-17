import Home from '../page/home';
import List from '../page/list';

export default [
    {
        name: 'home',
        title: '首页',
        path: '/',
        page: Home,
        exact: true,
        layout: true,
    },
    {
        name: 'list',
        title: '列表',
        path: '/list',
        page: List,
        exact: true,
        layout: true,
    },
    {
        name: 'home2',
        title: '测试',
        path: '/test',
        page: Home,
        exact: true,
        layout: false,
    },
];
