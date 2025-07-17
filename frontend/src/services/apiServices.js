import { axiosInstance } from "./axios";


export const registerUserAPI = async (userData, setIsloading) => {
    try {
        setIsloading(true)
        const result = await axiosInstance.post('/auth/register', userData);
        return result
        
    } catch (error) {
        console.log(error);
        throw error
        
    }
}

export const loginUserAPI = async (credentials, setIsloading) => {
    try {
        setIsloading(true)
        const result = await axiosInstance.post('/auth/login', credentials);
        return result
        
    } catch (error) {
        console.log(error);
        throw error
        
    }
}

export const logoutUserAPI = async () => {
    try {
        const result = await axiosInstance.get('/auth/logout');
        return result
        
    } catch (error) {
        console.log(error);
        throw error
        
    }
}

export const verifyAPI = async () => {
    try {
        const result = await axiosInstance.get('/auth/verify');
        return result.status === 200;  
    } catch (error) {
        return false
    }
}