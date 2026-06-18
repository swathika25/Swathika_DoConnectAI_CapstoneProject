import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
 
function UserDashboard() {
 
const navigate = useNavigate();
 
const userName =
    localStorage.getItem("name") || "User";
 
return (
    <>
        <Navbar />
 
        <div className="container-fluid bg-light min-vh-100">
 
            {/* Welcome Banner */}
 
            <div className="container pt-4">
 
                <div
                    className="shadow-lg text-white p-5 rounded"
                    style={{
                        background:
                            "linear-gradient(135deg,#4f46e5,#3b82f6,#06b6d4)"
                    }}
                >
 
                    <h1 className="fw-bold">
                        Welcome, {userName} 👋
                    </h1>
 
                    <p className="lead mb-0">
                        Explore questions, share knowledge and collaborate with the community.
                    </p>
 
                </div>
 
            </div>
 
            {/* Dashboard Cards */}
 
            <div className="container mt-5">
 
                <div className="row g-4">
 
                    {/* Ask Question */}
 
                    <div className="col-md-3">
 
                        <div
                            className="card shadow border-0 h-100"
                            style={{
                                cursor: "pointer",
                                transition: "0.3s"
                            }}
                            onClick={() =>
                                navigate("/ask-question")
                            }
                        >
 
                            <div className="card-body text-center p-4">
 
                                <h1>❓</h1>
 
                                <h4 className="mt-3">
                                    Ask Question
                                </h4>
 
                                <p>
                                    Post your doubts and receive answers from the community.
                                </p>
 
                            </div>
 
                        </div>
 
                    </div>
 
                    {/* View Questions */}
 
                    <div className="col-md-3">
 
                        <div
                            className="card shadow border-0 h-100"
                            style={{
                                cursor: "pointer",
                                transition: "0.3s"
                            }}
                            onClick={() =>
                                navigate("/questions")
                            }
                        >
 
                            <div className="card-body text-center p-4">
 
                                <h1>📚</h1>
 
                                <h4 className="mt-3">
                                    View Questions
                                </h4>
 
                                <p>
                                    Browse questions and contribute answers.
                                </p>
 
                            </div>
 
                        </div>
 
                    </div>
 
                    {/* Chat Room */}
 
                    <div className="col-md-3">
 
                        <div
                            className="card shadow border-0 h-100"
                            style={{
                                cursor: "pointer",
                                transition: "0.3s"
                            }}
                            onClick={() =>
                                navigate("/chat-room")
                            }
                        >
 
                            <div className="card-body text-center p-4">
 
                                <h1>💬</h1>
 
                                <h4 className="mt-3">
                                    Chat Room
                                </h4>
 
                                <p>
                                    Discuss ideas and collaborate with users.
                                </p>
 
                            </div>
 
                        </div>
 
                    </div>
 
                    {/* Notifications */}
 
                    <div className="col-md-3">
 
                        <div
                            className="card shadow border-0 h-100"
                            style={{
                                cursor: "pointer",
                                transition: "0.3s"
                            }}
                            onClick={() =>
                                navigate("/notifications")
                            }
                        >
 
                            <div className="card-body text-center p-4">
 
                                <h1>🔔</h1>
 
                                <h4 className="mt-3">
                                    Notifications
                                </h4>
 
                                <p>
                                    View updates and recent activities.
                                </p>
 
                            </div>

                            
 
                        </div>
 
                    </div>

                    <div
    className="col-md-4 mb-4"
    onClick={() =>
        alert(
            "🚀 AI Suggestions feature will be available in a future implementation."
        )
    }
    style={{ cursor: "pointer" }}
>
    <div className="card h-100 shadow border-0 text-center">
 
        <div className="card-body">
 
            <h2>🤖</h2>
 
            <h4 className="mt-3">
                AI Suggestions
            </h4>
 
            <p className="text-muted">
                Get AI-powered recommendations and answers.
            </p>
 
        </div>
 
    </div>
 
</div>
 
                </div>
 
            </div>
 
            {/* Community Section */}
 
            <div className="container mt-5 pb-5">
 
                <div className="card shadow border-0">
 
                    <div className="card-body">
 
                        <h3 className="mb-3">
                            Community Activity
                        </h3>
 
                        <ul className="list-group">
 
                            <li className="list-group-item">
                                New questions posted by users.
                            </li>
 
                            <li className="list-group-item">
                                Community members sharing answers.
                            </li>
 
                            <li className="list-group-item">
                                Participate in discussions through Chat Room.
                            </li>
 
                            <li className="list-group-item">
                                Stay updated through Notifications.
                            </li>
 
                        </ul>
 
                    </div>
 
                </div>
 
            </div>
 
        </div>
    </>
);
 
}
 
export default UserDashboard;
























































// import React from "react";
// import Navbar from "../layout/Navbar";
// import { useNavigate } from "react-router-dom";
 
// function UserDashboard() {
 
//     const navigate= useNavigate();
// const userName =
//     localStorage.getItem("name") || "User";
 
// return (
//     <>
//         <Navbar />
 
//         <div className="container-fluid bg-light min-vh-100">
 
//             {/* Welcome Banner */}
 
//             <div className="row">
 
//                 <div className="col-12">
 
//                     <div
//                         className="p-5 text-white shadow"
//                         style={{
//                             background:
//                                 "linear-gradient(135deg,#4f46e5,#3b82f6,#06b6d4)",
//                             borderRadius: "15px",
//                             marginTop: "20px"
//                         }}
//                     >
 
//                         <h1>
//                             Welcome, {userName} 👋
//                         </h1>
 
//                         <p className="lead mb-0">
//                             Explore questions, share answers and connect with the community.
//                         </p>
 
//                     </div>
 
//                 </div>
 
//             </div>
 
//             {/* Statistics */}
 
//             <div className="row mt-4">
 
//                 <div className="col-md-4">
 
//                     <div className="card shadow border-0">
 
//                         <div className="card-body text-center">
 
//                             <h1>❓</h1>
 
//                             <h3>Ask Questions</h3>
 
//                             <p>
//                                 Post your doubts and get answers.
//                             </p>
 
//                         </div>
 
//                     </div>
 
//                 </div>
 
//                 <div className="col-md-4">
 
//                     <div className="card shadow border-0">
 
//                         <div className="card-body text-center">
 
//                             <h1>💡</h1>
 
//                             <h3>Post Answers</h3>
 
//                             <p>
//                                 Help others with your knowledge.
//                             </p>
 
//                         </div>
 
//                     </div>
 
//                 </div>
 
//                 <div className="col-md-4">
 
//                     <div className="card shadow border-0">
 
//                         <div className="card-body text-center">
 
//                             <h1>💬</h1>
 
//                             <h3>Chat Room</h3>
 
//                             <p>
//                                 Collaborate and discuss with users.
//                             </p>
 
//                         </div>
 
//                     </div>
 
//                 </div>
 
//             </div>
 
//             {/* Quick Actions */}
 
//             <div className="row mt-4">
 
//                 <div className="col-md-12">
 
//                     <div className="card shadow border-0">
 
//                         <div className="card-body">
 
//                             <h4 className="mb-4">
//                                 Quick Actions
//                             </h4>
 
//                             <button className="btn btn-primary me-3"
//                             onClick={() => navigate("/ask-question")}
//                             >
//                                 Ask Question
//                             </button>
 
//                             <button className="btn btn-success me-3"
//                             onClick={()=>navigate("/questions")}
//                             >
//                                 View Questions
//                             </button>
 
//                             <button className="btn btn-warning"
//                             onClick={()=> navigate("/chat-room")}
//                             >
//                                 Open Chat Room
//                             </button>
 
//                         </div>
 
//                     </div>
 
//                 </div>
 
//             </div>
 
//             {/* Activity Section */}
 
//             <div className="row mt-4">
 
//                 <div className="col-md-12">
 
//                     <div className="card shadow border-0">
 
//                         <div className="card-body">
 
//                             <h4>
//                                 Community Activity
//                             </h4>
 
//                             <hr />
 
//                             <ul className="list-group">
 
//                                 <li className="list-group-item">
//                                     New questions posted by users.
//                                 </li>
 
//                                 <li className="list-group-item">
//                                     Latest answers shared by the community.
//                                 </li>
 
//                                 <li className="list-group-item">
//                                     Notifications and announcements.
//                                 </li>
 
//                             </ul>
 
//                         </div>
 
//                     </div>
 
//                 </div>
 
//             </div>
 
//         </div>
//     </>
// );
 
// }
 
// export default UserDashboard;
