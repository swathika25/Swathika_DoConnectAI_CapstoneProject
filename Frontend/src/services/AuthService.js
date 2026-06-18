import axiosInstance from "../config/axiosConfig";
 
const login = (loginData) => {
    return axiosInstance.post(
        "/auth/login",
        loginData
    );
};
 
const register = (userData) => {
    return axiosInstance.post(
        "/users",
        userData
    );
};
 
const getAllUsers = () => {
    return axiosInstance.get(
        "/users"
    );
};
 
const getUserById = (id) => {
    return axiosInstance.get(
        `/users/${id}`
    );
};
 
const deleteUser = (id) => {
    return axiosInstance.delete(
        `/users/${id}`
    );
};
 
const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
};
 
const AuthService = {
    login,
    register,
    getAllUsers,
    getUserById,
    deleteUser,
    logout
};
 
export default AuthService;