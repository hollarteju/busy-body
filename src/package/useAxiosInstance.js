import { axiosInstance } from './eStoreAxios';
// import { useRefreshToken } from './refreshToken';
import Cookies from 'js-cookie';
import { useEffect } from 'react';


export const useAxiosInterceptors = ()=>{
    // const refresh = useRefreshToken();

    useEffect(() => {
        const requestInterceptor = axiosInstance.interceptors.request.use(
            (config) => {
                const token = Cookies.get('signaturecards'); 
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseInterceptor = axiosInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error.response?.status;
                const originalRequest = error.config;

                if (status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    try {
                        const newToken = await refresh();
                        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                        return axiosInstance(originalRequest); 
                    } catch (err) {
                        return Promise.reject(err);
                    }
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };
    }, [refresh]);
};
