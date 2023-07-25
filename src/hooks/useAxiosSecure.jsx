import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://localhost:5000',
})

const useAxiosSecure = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem("access_token");
            if(token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        })
        axiosSecure.interceptors.response.use(
            response => response,
            async(error) => {
                if(error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logout();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        )
    }, [logout, navigate])
    return [axiosSecure];
}

export default useAxiosSecure;