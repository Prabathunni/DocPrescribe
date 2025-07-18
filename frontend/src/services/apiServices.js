import { axiosInstance } from "./axios";

// ------------AUTHENTICATION APIs----------------------
export const registerUserAPI = async (userData, setIsloading) => {
    setIsloading(true)
    const result = await axiosInstance.post('/auth/register', userData);
    return result
}

export const loginUserAPI = async (credentials, setIsloading) => {
    setIsloading(true)
    const result = await axiosInstance.post('/auth/login', credentials);
    return result
}

export const logoutUserAPI = async () => {
    const result = await axiosInstance.get('/auth/logout');
    return result
}

export const verifyAPI = async () => {
    try {
        const result = await axiosInstance.get('/auth/verify');
        return result.status === 200;
    } catch (error) {
        return false
    }
}

// -------------------PRESCRIPTION APIs--------------------------------
export const addPrescriptionAPI = async (prescriptionData, setIsloading) => {
    setIsloading(true)
    const result = await axiosInstance.post('/prescription/add', prescriptionData);
    return result
}

export const getAllPrescriptionsAPI = async () => {
    const result = await axiosInstance.get('/prescription');
    return result
}

