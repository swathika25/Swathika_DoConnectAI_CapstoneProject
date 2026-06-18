import React from "react";
import { Navigate } from "react-router-dom";
 
function PrivateRoute({ children }) {
 
    const token = localStorage.getItem("token");
 
    // If user is NOT logged in → redirect to login page
    if (!token) {
        return <Navigate to="/" />;
    }
 
    // If logged in → allow access
    return children;
}
 
export default PrivateRoute;
 