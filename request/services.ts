import axios, {AxiosInstance} from "axios";
import {Pod} from "../server/models/pod";

class Services {
    private service: AxiosInstance;
    constructor() {
        let service = axios.create();
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;

    }

    handleSuccess(response) {
        return response;
    }

    handleError = (error) => {
        console.log("Service error: ", error);
        if (error.response && error.response.status === 401) {
            // localStorage.removeItem('lenderId');
            // localStorage.removeItem('emailOtp');
            // localStorage.removeItem('profile_token');
            // history.replace('/');
        }
        return Promise.reject(error)
    }

    extGet(path:string, params?:string, callback?) {
        return this.service.get(path, {
            params,
        }).then(
            (response) => callback ? callback(response.status, response.data) : response
        );
    }
}

export default new Services();