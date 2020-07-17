import Home from '../page/home';

export default [
    {
        name: 'home',
        path: '/',
        page: Home,
        exact: true,
        layout: true,
    },
    {
        name: 'home2',
        path: '/test',
        page: Home,
        exact: true,
        layout: false,
    },
];
