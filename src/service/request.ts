import axios from 'axios';
import QS from 'query-string';
import UserModels from '../models/user';

axios.defaults.timeout = 5000;

const server = axios.create();

class RequestError extends Error {
    constructor(name: string, code: number, msg: string) {
        super(name);
        this.code = code;
        this.msg = msg;
    }
    code: number;
    msg: string;
}
/**
 * 自定义请求库
 */
class Request {
    async _fetch(url: string, opts: any) {
        let res;
        try {
            opts.url = url;
            res = await server(opts);
        } catch (e) {
            console.warn('网络错误', e);
            throw new Error('网络连接失败，请检查网络权限');
        }
        return res;
    }
    async _request(url: string, opts: any) {
        if (url.indexOf('http') !== 0) url = '/api' + url;
        let res = await this._fetch(url, opts);
        this._checkStatus(res, url);
        let json = res.data;
        this._checkServerCode(json);
        return json.data;
    }
    _checkStatus(resp: any, url: string) {
        if (resp.status !== 200) {
            throw new Error('网络连接失败，请检查网络');
        }
    }
    _checkServerCode(json: any) {
        if (json.code !== 1) {
            console.log('返回状态报错', json.code);
            throw new RequestError(json.msg, json.code, json.data);
        }
    }
    getHeaders(ispost = false) {
        let headers: any = {};
        const token = UserModels.getToken();
        if (token) headers.token = token;
        return headers;
    }

    async get(url: string, data: any = {}) {
        let tempData = '';
        if (data) tempData = QS.stringify(data, { skipNull: true });
        return this._request(url + '?' + tempData, {
            method: 'GET',
            credentials: 'include',
            headers: this.getHeaders(),
        });
    }

    async post(url: string, data: any = {}) {
        return this._request(url, {
            method: 'POST',
            credentials: 'include',
            headers: this.getHeaders(true),
            data: JSON.stringify(data),
        });
    }
}

export default new Request();
