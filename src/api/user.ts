import request from '../service/request';

export default {
    login: (params: any) => request.post('/user/login', params),
};
