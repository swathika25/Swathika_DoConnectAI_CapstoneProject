import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { useNavigate } from "react-router-dom";
 
function ChatRoom() {
 
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const navigate=useNavigate();
    const role = localStorage.getItem("role");
    const backToDashboard =() => {
        if(role === "ADMIN"){
            navigate("/admin-dashboard");
        }else{
            navigate("/user-dashboard");
        }
    }
 
    const userName = localStorage.getItem("name") || "Guest";
 
    const sendMessage = () => {
 
        if (!input.trim()) {
            return;
        }
 
        const newMessage = {
            sender: userName,
            content: input
        };
 
        setMessages([...messages, newMessage]);
        setInput("");
    };
 
    return (
        <>
            <Navbar />
 
            <div className="container mt-4">

                <button className="btn btn-outline-primary mb-3"
                onClick={backToDashboard} >Back to DashBoard</button>
 
                <div className="card shadow">
 
                    <div className="card-header bg-primary text-white">
                        <h4>Chat Room</h4>
                        <small>Discussion Space</small>
                    </div>
 
                    <div
                        className="card-body"
                        style={{
                            height: "400px",
                            overflowY: "auto",
                            backgroundColor: "#f8f9fa"
                        }}
                    >
 
                        {messages.length === 0 ? (
                            <p className="text-muted">
                                No messages yet...
                            </p>
                        ) : (
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className="border rounded p-2 mb-2 bg-white"
                                >
                                    <strong>{msg.sender}</strong>
                                    <br />
                                    {msg.content}
                                </div>
                            ))
                        )}
 
                    </div>
 
                    <div className="card-footer">
 
                        <div className="input-group">
 
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) =>
                                    setInput(e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        sendMessage();
                                    }
                                }}
                            />
 
                            <button
                                className="btn btn-success"
                                onClick={sendMessage}
                            >
                                Send
                            </button>
 
                        </div>
 
                    </div>
 
                </div>

                {/* <button className="btn btn-outline-primary mb-3"
                onClick={backToDashboard} >Back to DashBoard</button> */}
 
            </div>

            
        </>
    );
}
 
export default ChatRoom;
 
































// import React, { useState } from "react";
// import Navbar from "../layout/Navbar";
 
// function ChatRoom() {
 
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState("");
 
//     const sendMessage = () => {
 
//         if (!input.trim()) return;
 
//         const newMessage = {
//             text: input,
//             sender: localStorage.getItem("role")
//         };
 
//         setMessages([...messages, newMessage]);
//         setInput("");
//     };
 
//     return (
//         <>
//             <Navbar />
 
//             <div className="container mt-4">
 
//                 <div className="p-4 bg-dark text-white rounded shadow mb-3">
//                     <h3>Chat Room</h3>
//                     <p className="mb-0">Real-time discussion space</p>
//                 </div>
 
//                 {/* CHAT BOX */}
//                 <div className="card shadow mb-3">
//                     <div className="card-body" style={{ height: "300px", overflowY: "auto" }}>
 
//                         {messages.length === 0 ? (
//                             <p className="text-muted">No messages yet</p>
//                         ) : (
//                             messages.map((msg, index) => (
//                                 <div key={index} className="mb-2">
//                                     <span className="badge bg-primary">
//                                         {msg.sender}
//                                     </span>{" "}
//                                     {msg.text}
//                                 </div>
//                             ))
//                         )}
 
//                     </div>
//                 </div>
 
//                 {/* INPUT */}
//                 <div className="input-group">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Type message..."
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                     />
//                     <button
//                         className="btn btn-success"
//                         onClick={sendMessage}
//                     >
//                         Send
//                     </button>
//                 </div>
 
//             </div>
//         </>
//     );
// }
 
// export default ChatRoom;
