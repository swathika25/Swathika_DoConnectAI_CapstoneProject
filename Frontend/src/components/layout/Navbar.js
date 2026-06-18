import React from "react";
import { Link, useNavigate } from "react-router-dom";
 
function Navbar() {
 
const navigate = useNavigate();
const role = localStorage.getItem("role");
 
const userName =
    localStorage.getItem("name") || "User";
 
const logout = () => {
 
    localStorage.clear();
 
    navigate("/login");
 
};
 
return (
 
    <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow"
    >
 
        <div className="container">
 
            <Link
                className="navbar-brand fw-bold fs-3"
                to="/"
            >
                🤖 DoConnect AI
            </Link>
 
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
 
            <div
                className="collapse navbar-collapse"
                id="navbarNav"
            >
 
                <ul className="navbar-nav mx-auto">
 
                    <li className="nav-item">
 
                        <Link
                            className="nav-link fw-semibold"
                            to={
                                role === "ADMIN"
                                ? "/admin-dashboard"
                                : "/user-dashboard"
                            }
                        >
                            Dashboard
                        </Link>
 
                    </li>
 
                    <li className="nav-item">
 
                        <Link
                            className="nav-link fw-semibold"
                            to="/ask-question"
                        >
                            Ask Question
                        </Link>
 
                    </li>
 
                    <li className="nav-item">
 
                        <Link
                            className="nav-link fw-semibold"
                            to="/questions"
                        >
                            Questions
                        </Link>
 
                    </li>
 
                    <li className="nav-item">
 
                        <Link
                            className="nav-link fw-semibold"
                            to="/chat-room"
                        >
                            Chat Room
                        </Link>
 
                    </li>
 
                    <li className="nav-item">
 
                        <Link
                            className="nav-link fw-semibold"
                            to="/notifications"
                        >
                            Notifications
                        </Link>
 
                    </li>
 
                </ul>
 
                <div className="d-flex align-items-center">
 
                    <span
                        className="text-white me-3 fw-bold"
                    >
                        👤 {userName}
                    </span>
 
                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        Logout
                    </button>
 
                </div>
 
            </div>
 
        </div>
 
    </nav>
 
);
 
}
 
export default Navbar;
 


































// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
 
// function Navbar() {
 
//     const navigate = useNavigate();
//     const role = localStorage.getItem("role");
 
//     const logout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("role");
//         navigate("/");
//     };
 
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
 
//             <div className="container">
 
//                 <Link className="navbar-brand fw-bold text-info" to="/">
//                     DoConnect AI
//                 </Link>
 
//                 <div className="navbar-nav me-auto">
 
//                     {/* DASHBOARD ROLE FIX */}
//                     {role === "ADMIN" ? (
//                         <Link className="nav-link" to="/admin-dashboard">
//                             Dashboard
//                         </Link>
//                     ) : (
//                         <Link className="nav-link" to="/user-dashboard">
//                             Dashboard
//                         </Link>
//                     )}
 
//                     <Link className="nav-link" to="/ask-question">
//                         Ask Question
//                     </Link>
 
//                     <Link className="nav-link" to="/questions">
//                         Questions
//                     </Link>
 
//                     <Link className="nav-link" to="/chat">
//                         Chat Room
//                     </Link>
 
//                     <Link className="nav-link" to="/notifications">
//                         Notifications
//                     </Link>
 
//                 </div>
 
//                 <span className="badge bg-warning text-dark me-3">
//                     Role: {role}
//                 </span>
 
//                 <button className="btn btn-danger btn-sm" onClick={logout}>
//                     Logout
//                 </button>
 
//             </div>
//         </nav>
//     );
// }
 
// export default Navbar;