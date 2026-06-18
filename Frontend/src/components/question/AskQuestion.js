import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import QuestionService from "../../services/QuestionService";
 
function AskQuestion() {
 
const navigate = useNavigate();
 
const role = localStorage.getItem("role");
 
const backToDashboard = () => {
 
    if (role === "ADMIN") {
        navigate("/admin-dashboard");
    } else {
        navigate("/user-dashboard");
    }
 
};
 
const [question, setQuestion] = useState({
 
    title: "",
    description: "",
    tags: ""
 
});
 
const handleChange = (e) => {
 
    setQuestion({
 
        ...question,
        [e.target.name]: e.target.value
 
    });
 
};
 
const handleSubmit = (e) => {
 
    e.preventDefault();
 
    const questionData = {
 
        title: question.title,
        description: question.description,
        tags: question.tags,
        postedBy: localStorage.getItem("name")
 
    };
 
    console.log(questionData);
 
    QuestionService.addQuestion(questionData)
 
        .then((response) => {
 
            alert("Question Posted Successfully");
 
            setQuestion({
 
                title: "",
                description: "",
                tags: ""
 
            });
 
            navigate("/questions");
 
        })
 
        .catch((error) => {
 
            console.error(error);
 
            alert("Failed to Post Question");
 
        });
 
};
 
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
 
            <div className="card shadow border-0">
 
                <div className="card-header bg-primary text-white">
 
                    <h3 className="mb-0">
                        Ask Question
                    </h3>
 
                </div>
 
                <div className="card-body">
 
                    <form onSubmit={handleSubmit}>
 
                        <div className="mb-3">
 
                            <label className="form-label">
                                Question Title
                            </label>
 
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={question.title}
                                onChange={handleChange}
                                required
                            />
 
                        </div>
 
                        <div className="mb-3">
 
                            <label className="form-label">
                                Description
                            </label>
 
                            <textarea
                                className="form-control"
                                rows="5"
                                name="description"
                                value={question.description}
                                onChange={handleChange}
                                required
                            ></textarea>
 
                        </div>
 
                        <div className="mb-3">
 
                            <label className="form-label">
                                Tags
                            </label>
 
                            <input
                                type="text"
                                className="form-control"
                                name="tags"
                                placeholder="Example: Spring, JWT"
                                value={question.tags}
                                onChange={handleChange}
                                required
                            />
 
                            <small className="text-muted">
                                Enter tags separated by commas.
                            </small>
 
                        </div>
 
                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Submit Question
                        </button>
 
                    </form>
 
                </div>
 
            </div>
 
        </div>
 
    </>
 
);
 
}
 
export default AskQuestion;





















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../layout/Navbar";
// import QuestionService from "../../services/QuestionService";
 
// function AskQuestion() {
 
// const navigate = useNavigate();
 
// const role = localStorage.getItem("role");
 
// const backToDashboard = () => {
 
//     if (role === "ADMIN") {
//         navigate("/admin-dashboard");
//     } else {
//         navigate("/user-dashboard");
//     }
 
// };
 
// const [question, setQuestion] = useState({
 
//     title: "",
//     description: "",
//     tags: ""
 
// });
 
// const handleChange = (e) => {
 
//     setQuestion({
 
//         ...question,
//         [e.target.name]: e.target.value
 
//     });
 
// };
 
// const handleSubmit = (e) => {
 
//     e.preventDefault();
 
//     const questionData = {
 
//         title: question.title,
//         description: question.description,
//         tags: question.tags,
 
//         // Logged-in user name
//         postedBy: localStorage.getItem("name")
 
//     };
 
//     QuestionService.addQuestion(questionData)
 
//         .then((response) => {
 
//             alert("Question Posted Successfully");
 
//             setQuestion({
 
//                 title: "",
//                 description: "",
//                 tags: ""
 
//             });
 
//             navigate("/questions");
 
//         })
 
//         .catch((error) => {
 
//             console.error(error);
 
//             alert("Failed to Post Question");
 
//         });
 
// };
 
// return (
 
//     <>
 
//         <Navbar />
 
//         <div className="container mt-4">
 
//             <button
//                 className="btn btn-outline-primary mb-3"
//                 onClick={backToDashboard}
//             >
//                 ← Back to Dashboard
//             </button>
 
//             <div className="card shadow border-0">
 
//                 <div className="card-header bg-primary text-white">
 
//                     <h3 className="mb-0">
//                         Ask Question
//                     </h3>
 
//                 </div>
 
//                 <div className="card-body">
 
//                     <form onSubmit={handleSubmit}>
 
//                         <div className="mb-3">
 
//                             <label className="form-label">
//                                 Question Title
//                             </label>
 
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="title"
//                                 value={question.title}
//                                 onChange={handleChange}
//                                 required
//                             />
 
//                         </div>
 
//                         <div className="mb-3">
 
//                             <label className="form-label">
//                                 Description
//                             </label>
 
//                             <textarea
//                                 className="form-control"
//                                 rows="5"
//                                 name="description"
//                                 value={question.description}
//                                 onChange={handleChange}
//                                 required
//                             ></textarea>
 
//                         </div>
 
//                         <div className="mb-3">
 
//                             <label className="form-label">
//                                 Tags
//                             </label>
 
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="tags"
//                                 placeholder="Example: Spring, JWT"
//                                 value={question.tags}
//                                 onChange={handleChange}
//                                 required
//                             />
 
//                             <small className="text-muted">
//                                 Enter tags separated by commas.
//                             </small>
 
//                         </div>
 
//                         <button
//                             type="submit"
//                             className="btn btn-success"
//                         >
//                             Submit Question
//                         </button>
 
//                     </form>
 
//                 </div>
 
//             </div>
 
//         </div>
 
//     </>
 
// );
 
// }
 
// export default AskQuestion;
 