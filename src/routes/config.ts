import Home from '../page/home';
import List from '../page/list';
import Table from '../page/table';
import Login from '../page/login';

interface ICFG {
    name: string;
    title: string;
    path: string;
    page: any;
    exact?: boolean;
    layout?: boolean;
    hide?: boolean;
}

const list: ICFG[] = [
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
        name: 'table',
        title: '表格',
        path: '/table',
        page: Table,
        exact: true,
        layout: true,
    },
    {
        name: 'login',
        title: '登录',
        path: '/login',
        page: Login,
        exact: true,
        layout: false,
    },
    {
        name: 'home2',
        title: '测试',
        path: '/test',
        page: Home,
        exact: true,
        layout: false,
        hide: true,
    },
];
export default list;
