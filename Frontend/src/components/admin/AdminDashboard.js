import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import UserManagement from "./UserManagement";
import QuestionList from "../question/QuestionList";
 
function AdminDashboard() {
 
const [activeTab, setActiveTab] = useState("dashboard");
 
const [stats, setStats] = useState({
    userCount: 0,
    adminCount: 0,
    totalUsers: 0
});
 
useEffect(() => {
    loadStats();
}, []);
 
const loadStats = () => {
 
    axios.get(
        "http://localhost:8080/admin/stats",
        {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
    .then((res) => {
        setStats(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
 
};
 
return (
    <>
        <Navbar />
 
        <div className="container-fluid">
 
            <div className="row">
 
                {/* Sidebar */}
 
                <div
                    className="col-md-2 bg-dark text-white p-0 shadow-lg"
                    style={{
                        minHeight: "100vh"
                    }}
                >
 
                    <div className="p-4">
 
                        <h3 className="text-center fw-bold">
                            👨‍💼 Admin Panel
                        </h3>
 
                        <hr className="bg-light" />
 
                        <button
                            className={`btn w-100 mb-3 ${
                                activeTab === "dashboard"
                                    ? "btn-primary"
                                    : "btn-outline-light"
                            }`}
                            onClick={() =>
                                setActiveTab("dashboard")
                            }
                        >
                            📊 Dashboard
                        </button>
 
                        <button
                            className={`btn w-100 mb-3 ${
                                activeTab === "users"
                                    ? "btn-primary"
                                    : "btn-outline-light"
                            }`}
                            onClick={() =>
                                setActiveTab("users")
                            }
                        >
                            👥 Users
                        </button>
 
                        <button
                            className={`btn w-100 mb-3 ${
                                activeTab === "admins"
                                    ? "btn-primary"
                                    : "btn-outline-light"
                            }`}
                            onClick={() =>
                                setActiveTab("admins")
                            }
                        >
                            👑 Admins
                        </button>
 
                        <button
                            className={`btn w-100 mb-3 ${
                                activeTab === "questions"
                                    ? "btn-primary"
                                    : "btn-outline-light"
                            }`}
                            onClick={() =>
                                setActiveTab("questions")
                            }
                        >
                            ❓ Questions
                        </button>
 
                    </div>
 
                </div>
 
                {/* Main Content */}
 
                <div
                    className="col-md-10 bg-light p-4"
                >
 
                    {/* Dashboard */}
 
                    {activeTab === "dashboard" && (
 
                        <>
                            <div
                                className="shadow-lg text-white p-5 rounded"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#4f46e5,#3b82f6,#06b6d4)"
                                }}
                            >
 
                                <h1 className="fw-bold">
                                    Welcome Admin 👋
                                </h1>
 
                                <p className="lead mb-0">
                                    Manage users, admins, questions and platform activity.
                                </p>
 
                            </div>
 
                            <div className="row mt-4">
 
                                <div className="col-md-4">
 
                                    <div className="card border-0 shadow-lg">
 
                                        <div className="card-body text-center">
 
                                            <h1 className="text-primary">
                                                {stats.userCount}
                                            </h1>
 
                                            <h5>
                                                Total Users
                                            </h5>
 
                                        </div>
 
                                    </div>
 
                                </div>
 
                                <div className="col-md-4">
 
                                    <div className="card border-0 shadow-lg">
 
                                        <div className="card-body text-center">
 
                                            <h1 className="text-success">
                                                {stats.adminCount}
                                            </h1>
 
                                            <h5>
                                                Total Admins
                                            </h5>
 
                                        </div>
 
                                    </div>
 
                                </div>
 
                                <div className="col-md-4">
 
                                    <div className="card border-0 shadow-lg">
 
                                        <div className="card-body text-center">
 
                                            <h1 className="text-warning">
                                                {stats.totalUsers}
                                            </h1>
 
                                            <h5>
                                                Total Accounts
                                            </h5>
 
                                        </div>
 
                                    </div>
 
                                </div>
 
                            </div>
 
                            <div className="card border-0 shadow-lg mt-4">
 
                                <div className="card-body">
 
                                    <h4>
                                        Platform Overview
                                    </h4>
 
                                    <hr />
 
                                    <ul className="list-group">
 
                                        <li className="list-group-item">
                                            Manage registered users.
                                        </li>
 
                                        <li className="list-group-item">
                                            View all administrators.
                                        </li>
 
                                        <li className="list-group-item">
                                            Monitor platform questions.
                                        </li>
 
                                        <li className="list-group-item">
                                            Maintain discussion quality.
                                        </li>
 
                                    </ul>
 
                                </div>
 
                            </div>
 
                        </>
                    )}
 
                    {/* Users */}
 
                    {activeTab === "users" && (
                        <>
                            <h2 className="mb-4">
                                👥 User Management
                            </h2>
 
                            <UserManagement role="USER" />
                        </>
                    )}
 
                    {/* Admins */}
 
                    {activeTab === "admins" && (
                        <>
                            <h2 className="mb-4">
                                👑 Admin Management
                            </h2>
 
                            <UserManagement role="ADMIN" />
                        </>
                    )}
 
                    {/* Questions */}
 
                    {activeTab === "questions" && (
                        <>
                            <h2 className="mb-4">
                                ❓ Question Management
                            </h2>
 
                            <QuestionList />
                        </>
                    )}
 
                </div>
 
            </div>
 
        </div>
    </>
);
 
}
 
export default AdminDashboard;















































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../layout/Navbar";
// import UserManagement from "./UserManagement";
 
// function AdminDashboard() {
 
// const [activeTab, setActiveTab] = useState("dashboard");
 
// const [stats, setStats] = useState({
//     userCount: 0,
//     adminCount: 0,
//     totalUsers: 0
// });
 
// const [questions, setQuestions] = useState([]);
 
// useEffect(() => {
//     loadStats();
// }, []);
 
// const loadStats = () => {
 
//     axios.get(
//         "http://localhost:8080/admin/stats",
//         {
//             headers: {
//                 Authorization:
//                     `Bearer ${localStorage.getItem("token")}`
//             }
//         }
//     )
//     .then((res) => {
//         setStats(res.data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// };
 
// const loadQuestions = () => {
 
//     axios.get(
//         "http://localhost:8080/questions",
//         {
//             headers: {
//                 Authorization:
//                     `Bearer ${localStorage.getItem("token")}`
//             }
//         }
//     )
//     .then((res) => {
//         setQuestions(res.data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// };
 
// return (
//     <>
//         <Navbar />
 
//         <div className="container-fluid">
 
//             <div className="row">
 
//                 {/* Sidebar */}
 
//                 <div
//                     className="col-md-2 bg-dark text-white"
//                     style={{ minHeight: "100vh" }}
//                 >
 
//                     <h4 className="text-center mt-4">
//                         Admin Panel
//                     </h4>
 
//                     <hr />
 
//                     <button
//                         className="btn btn-dark w-100 mb-2"
//                         onClick={() => setActiveTab("dashboard")}
//                     >
//                         Dashboard
//                     </button>
 
//                     <button
//                         className="btn btn-dark w-100 mb-2"
//                         onClick={() => setActiveTab("users")}
//                     >
//                         Users
//                     </button>
 
//                     <button
//                         className="btn btn-dark w-100 mb-2"
//                         onClick={() => setActiveTab("admins")}
//                     >
//                         Admins
//                     </button>
 
//                     <button
//                         className="btn btn-dark w-100 mb-2"
//                         onClick={() => {
//                             setActiveTab("questions");
//                             loadQuestions();
//                         }}
//                     >
//                         Questions
//                     </button>
 
//                 </div>
 
//                 {/* Content */}
 
//                 <div className="col-md-10 p-4">
 
//                     {activeTab === "dashboard" && (
 
//                         <>
//                             <h2 className="mb-4">
//                                 Admin Dashboard
//                             </h2>
 
//                             <div className="row">
 
//                                 <div className="col-md-4">
//                                     <div className="card bg-primary text-white shadow">
//                                         <div className="card-body text-center">
//                                             <h1>{stats.userCount}</h1>
//                                             <h5>Total Users</h5>
//                                         </div>
//                                     </div>
//                                 </div>
 
//                                 <div className="col-md-4">
//                                     <div className="card bg-success text-white shadow">
//                                         <div className="card-body text-center">
//                                             <h1>{stats.adminCount}</h1>
//                                             <h5>Total Admins</h5>
//                                         </div>
//                                     </div>
//                                 </div>
 
//                                 <div className="col-md-4">
//                                     <div className="card bg-warning shadow">
//                                         <div className="card-body text-center">
//                                             <h1>{stats.totalUsers}</h1>
//                                             <h5>Total Accounts</h5>
//                                         </div>
//                                     </div>
//                                 </div>
 
//                             </div>
 
//                         </>
//                     )}
 
//                     {activeTab === "users" && (
//                         <>
//                             <h2>Users</h2>
//                             <UserManagement role="USER" />
//                         </>
//                     )}
 
//                     {activeTab === "admins" && (
//                         <>
//                             <h2>Admins</h2>
//                             <UserManagement role="ADMIN" />
//                         </>
//                     )}
 
//                     {activeTab === "questions" && (
//                         <>
//                             <h2>Questions</h2>
 
//                             <table className="table table-bordered">
 
//                                 <thead className="table-dark">
 
//                                     <tr>
//                                         <th>ID</th>
//                                         <th>Title</th>
//                                         <th>Description</th>
//                                     </tr>
 
//                                 </thead>
 
//                                 <tbody>
 
//                                     {questions.map((q) => (
 
//                                         <tr key={q.questionId}>
//                                             <td>{q.questionId}</td>
//                                             <td>{q.title}</td>
//                                             <td>{q.description}</td>
//                                         </tr>
 
//                                     ))}
 
//                                 </tbody>
 
//                             </table>
 
//                         </>
//                     )}
 
//                 </div>
 
//             </div>
 
//         </div>
//     </>
// );
 
// }
 
// export default AdminDashboard;
 
