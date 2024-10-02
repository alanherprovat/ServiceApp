import axios from "axios";
import { BaseURL } from "./config";

// Function to get the token from localStorage (since localStorage is used in web apps)
async function getToken() {
    return localStorage.getItem("UserToken");
}

// Create an axios instance with the base URL
const axiosInstance = axios.create({
    baseURL: BaseURL,
});

// Interceptor for handling the token refresh logic in case of a 401 Unauthorized response
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            try {
                const newToken = await getToken();
                if (newToken) {
                    // Set the new token in axios headers
                    axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                    const originalRequest = error.config;
                    // Update the original request's Authorization header
                    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    // Retry the original request with the new token
                    return axios(originalRequest);
                }
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
