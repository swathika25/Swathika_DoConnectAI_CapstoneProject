import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import { useNavigate } from "react-router-dom";
 
function NotificationList() {
 
const [notifications, setNotifications] = useState([]);
 
const navigate = useNavigate();
 
const role = localStorage.getItem("role");
 
const backToDashboard = () => {
 
    if (role === "ADMIN") {
 
        navigate("/admin-dashboard");
 
    } else {
 
        navigate("/user-dashboard");
 
    }
 
};
 
const token = localStorage.getItem("token");
 
const userId = localStorage.getItem("userId");
 
const config = {
 
    headers: {
 
        Authorization: `Bearer ${token}`
 
    }
 
};
 
useEffect(() => {
 
    axios
        .get(
            `http://localhost:8080/notifications/user/${userId}`,
            config
        )
        .then((res) => {
 
            setNotifications(res.data);
 
        })
        .catch((error) => {
 
            console.error(error);
 
            setNotifications([
                {
                    message:
                        "Welcome to DoConnect AI"
                },
                {
                    message:
                        "New answers will appear here"
                }
            ]);
 
        });
 
}, []);
 
return (
 
    <>
 
        <Navbar />
 
        <div className="container mt-4">
 
            <button
                className="btn btn-outline-primary mb-3"
                onClick={backToDashboard}
            >
                ← Back to Dashboard
            </button>
 
            <div
                className="p-4 bg-danger text-white rounded shadow mb-4"
            >
                <h3>Notifications</h3>
 
                <p className="mb-0">
                    Latest updates from the system
                </p>
            </div>
 
            {notifications.length === 0 ? (
 
                <div className="alert alert-info">
 
                    No notifications available
 
                </div>
 
            ) : (
 
                notifications.map((n, index) => (
 
                    <div
                        key={index}
                        className="card mb-3 shadow-sm"
                    >
 
                        <div className="card-body">
 
                            <h6>
                                {n.message}
                            </h6>
 
                        </div>
 
                    </div>
 
                ))
 
            )}
 
        </div>
 
    </>
 
);
 
}
 
export default NotificationList;
 








































// // import Navbar from "../layout/Navbar";
// // import Footer from "../layout/Footer";
 
// // function NotificationList() {
 
// //     return (
 
// //         <div>
 
// //             <Navbar />
 
// //             <div className="container mt-4">
 
// //                 <h2 className="text-center mb-4">
// //                     Notifications
// //                 </h2>
 
// //                 <div className="card mb-3 shadow">
 
// //                     <div className="card-body">
 
// //                         <h5>
// //                             New Answer Received
// //                         </h5>
 
// //                         <p>
// //                             Someone answered your question about JWT Authentication.
// //                         </p>
 
// //                     </div>
 
// //                 </div>
 
// //                 <div className="card mb-3 shadow">
 
// //                     <div className="card-body">
 
// //                         <h5>
// //                             Question Updated
// //                         </h5>
 
// //                         <p>
// //                             Your question has received additional responses.
// //                         </p>
 
// //                     </div>
 
// //                 </div>
 
// //                 <div className="card mb-3 shadow">
 
// //                     <div className="card-body">
 
// //                         <h5>
// //                             Welcome to DoConnect
// //                         </h5>
 
// //                         <p>
// //                             Thank you for joining the platform.
// //                         </p>
 
// //                     </div>
 
// //                 </div>
 
// //             </div>
 
// //             <Footer />
 
// //         </div>
 
// //     );
// // }
 
// // export default NotificationList;
 