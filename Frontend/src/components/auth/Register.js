import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
 
function Register() {
 
const navigate = useNavigate();
 
const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER"
});
 
const handleChange = (e) => {
 
    setUser({
        ...user,
        [e.target.name]: e.target.value
    });
 
};
 
const handleSubmit = async (e) => {
 
    e.preventDefault();
 
    try {
 
        await axios.post(
            "http://localhost:8080/users",
            user
        );
 
        alert("Registration Successful");
 
        navigate("/login");
 
    } catch (error) {
 
        alert("Registration Failed");
 
    }
 
};
 
return (
 
    <div
        className="container-fluid"
        style={{
            minHeight: "100vh",
            background:
                "linear-gradient(135deg,#4f46e5,#3b82f6,#06b6d4)"
        }}
    >
 
        <div className="row min-vh-100">
 
            {/* Left Side */}
 
            <div
                className="col-md-6 d-flex flex-column justify-content-center text-white p-5"
            >
 
                <h1 className="display-3 fw-bold">
                    🤖 DoConnect AI
                </h1>
 
                <h3 className="mt-4">
                    Join Our Community
                </h3>
 
                <p className="lead mt-3">
 
                    Create an account and start
                    asking questions, sharing
                    answers and collaborating
                    with other users.
 
                </p>
 
            </div>
 
            {/* Right Side */}
 
            <div
                className="col-md-6 d-flex justify-content-center align-items-center"
            >
 
                <div
                    className="card shadow-lg border-0"
                    style={{
                        width: "500px",
                        borderRadius: "20px"
                    }}
                >
 
                    <div className="card-body p-5">
 
                        <h2
                            className="text-center fw-bold text-primary mb-4"
                        >
                            Create Account
                        </h2>
 
                        <form onSubmit={handleSubmit}>
 
                            <div className="mb-3">
 
                                <label className="form-label fw-bold">
                                    Full Name
                                </label>
 
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Name"
                                    value={user.name}
                                    onChange={handleChange}
                                    required
                                />
 
                            </div>
 
                            <div className="mb-3">
 
                                <label className="form-label fw-bold">
                                    Email
                                </label>
 
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                    value={user.email}
                                    onChange={handleChange}
                                    required
                                />
 
                            </div>
 
                            <div className="mb-3">
 
                                <label className="form-label fw-bold">
                                    Password
                                </label>
 
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Password"
                                    value={user.password}
                                    onChange={handleChange}
                                    required
                                />
 
                            </div>
 
                            <div className="mb-4">
 
                                <label className="form-label fw-bold">
                                    Role
                                </label>
 
                                <select
                                    name="role"
                                    className="form-select form-select-lg"
                                    value={user.role}
                                    onChange={handleChange}
                                >
 
                                    <option value="USER">
                                        USER
                                    </option>
 
                                    <option value="ADMIN">
                                        ADMIN
                                    </option>
 
                                </select>
 
                            </div>
 
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg w-100"
                            >
                                Register
                            </button>
 
                        </form>
 
                        <div className="text-center mt-4">
 
                            <p>
 
                                Already have an account?{" "}
 
                                <Link
                                    to="/login"
                                    className="fw-bold"
                                >
                                    Login Here
                                </Link>
 
                            </p>
 
                            <Link
                                to="/"
                                className="text-decoration-none"
                            >
                                ← Back to Home
                            </Link>
 
                        </div>
 
                    </div>
 
                </div>
 
            </div>
 
        </div>
 
    </div>
 
);
 
}
 
export default Register;
 
































// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
 
// function Register() {
 
//     const navigate = useNavigate();
 
//     const [user, setUser] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role: "USER"
//     });
 
//     const handleChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };
 
//     const handleSubmit = (e) => {
//         e.preventDefault();
 
//         axios.post("http://localhost:8080/auth/register", user)
//             .then(() => {
//                 alert("Registration successful");
//                 navigate("/");
//             })
//             .catch(() => {
//                 alert("Registration failed");
//             });
//     };
 
//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
 
//                     <div className="card shadow">
//                         <div className="card-header text-center">
//                             <h3>Register</h3>
//                         </div>
 
//                         <div className="card-body">
 
//                             <form onSubmit={handleSubmit}>
 
//                                 <div className="mb-3">
//                                     <label>Name</label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         className="form-control"
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
 
//                                 <div className="mb-3">
//                                     <label>Email</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         className="form-control"
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
 
//                                 <div className="mb-3">
//                                     <label>Password</label>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         className="form-control"
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
 
//                                 <div className="mb-3">
//                                     <label>Role</label>
//                                     <select
//                                         name="role"
//                                         className="form-select"
//                                         onChange={handleChange}
//                                     >
//                                         <option value="USER">USER</option>
//                                         <option value="ADMIN">ADMIN</option>
//                                     </select>
//                                 </div>
 
//                                 <button
//                                     type="submit"
//                                     className="btn btn-success w-100"
//                                 >
//                                     Register
//                                 </button>
 
//                             </form>
 
//                             <div className="text-center mt-3">
//                                 <p>
//                                     Already have an account?{" "}
//                                     <Link to="/login">Login Here</Link>
//                                 </p>
//                             </div>
 
//                         </div>
//                     </div>
 
//                 </div>
//             </div>
//         </div>
//     );
// }
 
// export default Register;
 