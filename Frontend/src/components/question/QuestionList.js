import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
 
function QuestionList() {
 
    const [questions, setQuestions] = useState([]);
    const [searchTag, setSearchTag] = useState("");
 
    const navigate = useNavigate();
 
    const role = localStorage.getItem("role");
 
    useEffect(() => {
        loadQuestions();
    }, []);
 
    const loadQuestions = () => {
 
        axios.get("http://localhost:8080/questions", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            setQuestions(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
 
    };
 
    const backToDashboard = () => {
 
        if (role && role.toUpperCase().includes("ADMIN")) {
            navigate("/admin-dashboard");
        } else {
            navigate("/user-dashboard");
        }
 
    };
 
    return (
        <div className="container mt-4">
 
            {/* Back Button */}
            <button
                className="btn btn-outline-primary mb-3"
                onClick={backToDashboard}
            >
                ← Back to Dashboard
            </button>
 
            {/* Title */}
            <h2 className="mb-3">All Questions</h2>
 
            {/* Search Bar */}
            <div className="row mb-4">
 
                <div className="col-md-6">
 
                    <input
                        type="text"
                        className="form-control shadow-sm"
                        placeholder="Search by tags (e.g. spring, java)"
                        value={searchTag}
                        onChange={(e) => setSearchTag(e.target.value)}
                    />
 
                </div>
 
            </div>
 
            {/* Questions List */}
            <div className="row">
 
                {questions
                    .filter((q) =>
                        searchTag === "" ||
                        (q.tags &&
                            q.tags.toLowerCase().includes(
                                searchTag.toLowerCase()
                            ))
                    )
                    .map((q) => (
 
                        <div className="col-md-6 mb-4" key={q.questionId}>
 
                            <div className="card shadow border-0 h-100">
 
                                <div className="card-body">
 
                                    <h5>{q.title}</h5>
 
                                    <p>{q.description}</p>
 
                                    {/* Tags */}
                                    <span className="badge bg-primary mb-2">
                                        {q.tags || "No Tags"}
                                    </span>
                                    <p>
                                        <strong>PostedBy:</strong>
                                        {q.postedBy}
                                    </p>
 
                                    {/* Created Time */}
                                    <p className="text-muted mt-2">
                                        Posted on:{" "}
                                        {q.createdAt
                                            ? new Date(q.createdAt).toLocaleString()
                                            : "N/A"}
                                    </p>
 
                                    {/* View Details */}
                                    <Link
                                        to={`/questions/${q.questionId}`}
                                        className="btn btn-success btn-sm"
                                    >
                                        View Details
                                    </Link>
 
                                </div>
 
                            </div>
 
                        </div>
 
                    ))}
 
            </div>
 
            {/* No results */}
            {questions.length === 0 && (
                <div className="alert alert-warning mt-3">
                    No questions found
                </div>
            )}
 
        </div>
    );
}
 
export default QuestionList;
 

















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

 
// function QuestionList() {
 
// const [questions, setQuestions] = useState([]);
 
// const [searchTag, setSearchTag] = useState("");
 
// const navigate = useNavigate();
 

 
// useEffect(() => {
//     loadQuestions();
// }, []);
 
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
 
// const backToDashboard = () => {
//     const role = localStorage.getItem("role") || "";
 
//     // if (role === "ADMIN")
//     if(role.includes("ADMIN"))
//          {
//         navigate("/admin-dashboard");
//     } else {
//         navigate("/user-dashboard");
//     }
 
// };
 
// return (
//     <>
      
 
//         <div className="container mt-4">
 
//             <button
//                 className="btn btn-outline-primary mb-3"
//                 onClick={backToDashboard}
//             >
//                 ← Back to Dashboard
//             </button>
 
//             <h2 className="mb-4">
//                 All Questions
//             </h2>
 
//             {/* Search Bar */}
 
//             <div className="row mb-4">
 
//                 <div className="col-md-6">
 
//                     <input
//                         type="text"
//                         className="form-control shadow-sm"
//                         placeholder="🔍 Search by Tag..."
//                         value={searchTag}
//                         onChange={(e) =>
//                             setSearchTag(
//                                 e.target.value
//                             )
//                         }
//                     />
 
//                 </div>
 
//             </div>
 
//             <div className="row">
 
//                 {questions
//                     .filter((question) =>
//                         searchTag === "" ||
//                         question.tags
//                             ?.toLowerCase()
//                             .includes(
//                                 searchTag.toLowerCase()
//                             )
//                     )
//                     .map((question) => (
 
//                         <div
//                             key={question.questionId}
//                             className="col-md-6 mb-4"
//                         >
 
//                             <div className="card shadow border-0 h-100">
 
//                                 <div className="card-body">
 
//                                     <h4 className="card-title">
 
//                                         {question.title}
 
//                                     </h4>
 
//                                     <p className="card-text">
 
//                                         {question.description}
 
//                                     </p>
 
//                                     <p>
 
//                                         <strong>
//                                             Tag:
//                                         </strong>
 
//                                         {" "}
 
//                                         <span className="badge bg-primary">
 
//                                             {question.tags}
 
//                                         </span>
 
//                                     </p>
 
//                                     <Link
//                                         to={`/questions/${question.questionId}`}
//                                         className="btn btn-success"
//                                     >
//                                         View Details
//                                     </Link>
 
//                                 </div>
 
//                             </div>
 
//                         </div>
 
//                     ))}
 
//             </div>
 
//         </div>
 
//     </>
// );
 
// }
 
// export default QuestionList;