import axios from "axios";
import ApiError from "./api-error";
import {getTokenFromLocalStorage} from "../utils/LocalStorageUtils";

// export default instance
let AxiosInterceptor = axios.create({
    withCredentials: false,
    crossDomain: true,
    crossOrigin: true
})

AxiosInterceptor.interceptors.request.use(
    config => {
        const user = getTokenFromLocalStorage("user");
        const token = user?.token;
        config.headers.Authorization = token ? `Bearer ` + token : ''
        return config;
    }
)

AxiosInterceptor.interceptors.response.use(
    response => {
        // TO STORE THE JWT TOKEN FROM RESPONSE
        return response
    },
    error => {
        return ApiError.errorHandler(error)
    }
)

export default AxiosInterceptor


