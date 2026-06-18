import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
function Login() {
 
const navigate = useNavigate();
 
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
 
const handleLogin = async (e) => {
 
    e.preventDefault();
 
    try {
 
        const response = await axios.post(
            "http://localhost:8080/auth/login",
            {
                email,
                password
            }
        );
       console.log(response.data);
        localStorage.setItem(
            "token",
            response.data.token
        );
 
        localStorage.setItem(
            "role",
            response.data.role
        );
 
        // Store logged in user name
        localStorage.setItem(
            "name",
            response.data.name
        );

        localStorage.setItem("userId",
            response.data.userId
        );
 
        if (response.data.role === "ADMIN") {
 
            navigate("/admin-dashboard");
 
        } else {
 
            navigate("/user-dashboard");
 
        }
 
    } catch (error) {
 
        console.error(error);
        alert("Invalid Credentials");
 
    }
 
};
 
return (
 
    <div
        className="container-fluid"
        style={{
            minHeight: "100vh",
            background:
                "linear-gradient(135deg, #4f46e5, #3b82f6, #06b6d4)"
        }}
    >
 
        <div className="row min-vh-100">
 
            {/* Left Side */}
 
            <div
                className="col-md-6 d-flex flex-column justify-content-center text-white p-5"
            >
 
                <h1 className="display-3 fw-bold">
                    DoConnect AI
                </h1>
 
                <h3 className="mt-3">
                    Welcome Back
                </h3>
 
                <p className="lead mt-3">
                    Connect with experts, ask questions,
                    share knowledge, collaborate through
                    discussions and grow together.
                </p>
 
            </div>
 
            {/* Right Side */}
 
            <div
                className="col-md-6 d-flex justify-content-center align-items-center"
            >
 
                <div
                    className="card shadow-lg border-0"
                    style={{
                        width: "450px",
                        borderRadius: "20px"
                    }}
                >
 
                    <div className="card-body p-5">
 
                        <h2
                            className="text-center mb-4 fw-bold text-primary"
                        >
                            Login
                        </h2>
 
                        <form onSubmit={handleLogin}>
 
                            <div className="mb-3">
 
                                <label className="form-label fw-bold">
                                    Email
                                </label>
 
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                />
 
                            </div>
 
                            <div className="mb-4">
 
                                <label className="form-label fw-bold">
                                    Password
                                </label>
 
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
 
                            </div>
 
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg w-100"
                            >
                                Login
                            </button>
 
                        </form>
 
                        <div className="text-center mt-4">
 
                            <p>
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="fw-bold text-decoration-none"
                                >
                                    Register Here
                                </Link>
                            </p>
 
                            <Link
                                to="/"
                                className="text-decoration-none"
                            >
                                Back to Home
                            </Link>
 
                        </div>
 
                    </div>
 
                </div>
 
            </div>
 
        </div>
 
    </div>
 
);
 
}
 
export default Login;





















// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
 
// function Login() {
 
// const navigate = useNavigate();
 
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
 
// const handleLogin = async (e) => {
 
//     e.preventDefault();
 
//     try {
 
//         const response = await axios.post(
//             "http://localhost:8080/auth/login",
//             {
//                 email,
//                 password
//             }
//         );
 
//         localStorage.setItem(
//             "token",
//             response.data.token
//         );
 
//         localStorage.setItem(
//             "role",
//             response.data.role
//         );
 
//         localStorage.setItem(
//             "name",
//             response.data.name
//         );
 
//         if (response.data.role === "ADMIN") {
 
//             navigate("/admin-dashboard");
 
//         } else {
 
//             navigate("/user-dashboard");
 
//         }
 
//     } catch (error) {
 
//         alert("Invalid Credentials");
 
//     }
// };
 
// return (
 
//     <div
//         className="container-fluid"
//         style={{
//             minHeight: "100vh",
//             background:
//                 "linear-gradient(135deg,#4f46e5,#3b82f6,#06b6d4)"
//         }}
//     >
 
//         <div className="row min-vh-100">
 
//             {/* Left Section */}
 
//             <div
//                 className="col-md-6 d-flex flex-column justify-content-center text-white p-5"
//             >
 
//                 <h1 className="display-3 fw-bold">
//                     🤖 DoConnect AI
//                 </h1>
 
//                 <h3 className="mt-3">
//                     Welcome Back
//                 </h3>
 
//                 <p className="lead mt-3">
 
//                     Connect with experts,
//                     ask questions,
//                     share knowledge,
//                     and grow together.
 
//                 </p>
 
//             </div>
 
//             {/* Right Section */}
 
//             <div
//                 className="col-md-6 d-flex justify-content-center align-items-center"
//             >
 
//                 <div
//                     className="card shadow-lg border-0"
//                     style={{
//                         width: "450px",
//                         borderRadius: "20px"
//                     }}
//                 >
 
//                     <div className="card-body p-5">
 
//                         <h2
//                             className="text-center mb-4 fw-bold text-primary"
//                         >
//                             Login
//                         </h2>
 
//                         <form onSubmit={handleLogin}>
 
//                             <div className="mb-3">
 
//                                 <label className="form-label fw-bold">
//                                     Email
//                                 </label>
 
//                                 <input
//                                     type="email"
//                                     className="form-control form-control-lg"
//                                     placeholder="Enter Email"
//                                     value={email}
//                                     onChange={(e) =>
//                                         setEmail(e.target.value)
//                                     }
//                                     required
//                                 />
 
//                             </div>
 
//                             <div className="mb-4">
 
//                                 <label className="form-label fw-bold">
//                                     Password
//                                 </label>
 
//                                 <input
//                                     type="password"
//                                     className="form-control form-control-lg"
//                                     placeholder="Enter Password"
//                                     value={password}
//                                     onChange={(e) =>
//                                         setPassword(e.target.value)
//                                     }
//                                     required
//                                 />
 
//                             </div>
 
//                             <button
//                                 type="submit"
//                                 className="btn btn-primary btn-lg w-100"
//                             >
//                                 Login
//                             </button>
 
//                         </form>
 
//                         <div className="text-center mt-4">
 
//                             <p>
 
//                                 Don't have an account?{" "}
 
//                                 <Link
//                                     to="/register"
//                                     className="fw-bold"
//                                 >
//                                     Register Here
//                                 </Link>
 
//                             </p>
 
//                             <Link
//                                 to="/"
//                                 className="text-decoration-none"
//                             >
//                                 ← Back to Home
//                             </Link>
 
//                         </div>
 
//                     </div>
 
//                 </div>
 
//             </div>
 
//         </div>

        
 
//     </div>
 
// );
 
// }
 
// export default Login;
