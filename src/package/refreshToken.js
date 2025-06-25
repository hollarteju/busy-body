import { useState } from 'react';
import { axiosInstance } from "./eStoreAxios";
import Cookies from 'js-cookie';

export const useRefreshToken = () => {
    const [failedQueue, setFailedQueue] = useState([]);

    const refresh = async () => {
        try {
            const { data } = await axiosInstance.post("/token",
                {
                    access_token: Cookies.get('signaturecards'),
                    refresh_token:  Cookies.get('signaturecards-refresh'),
                }
            );

            Cookies.set('signaturecards', data.accessToken);
            Cookies.set('signaturecards-refresh', data.refreshToken);
            

            failedQueue.forEach(callback => callback());
            setFailedQueue([]);
            return data.accessToken;
        } catch (error) {
            console.error("Failed to refresh token:", error);
            return Promise.reject(error);
        }
    };

    return refresh;
};