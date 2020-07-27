import { observable, action } from 'mobx';

class User {
    @observable token = localStorage.getItem('ys_token');

    @action login = (db: any) => {
        this.token = db.token;
        localStorage.setItem('ys_token', db.token);
    };
    getToken() {
        return '';
    }
}
export default new User();
