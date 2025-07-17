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