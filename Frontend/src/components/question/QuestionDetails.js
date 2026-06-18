import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
 
function QuestionDetails() {
 
const { id } = useParams();
 
const navigate = useNavigate();
 
const [question, setQuestion] = useState(null);
 
const [answers, setAnswers] = useState([]);
 
const [content, setContent] = useState("");
 
useEffect(() => {
 
    loadQuestion();
 
    loadAnswers();
 
}, [id]);
 
const loadQuestion = () => {
 
    axios.get(
        `http://localhost:8080/questions/${id}`,
        {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
    .then((res) => {
        setQuestion(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
 
};
 
const loadAnswers = () => {
 
    axios.get(
        `http://localhost:8080/answers/question/${id}`,
        {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
    .then((res) => {
        setAnswers(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
 
};
 
const submitAnswer = () => {
 
    if (!content.trim()) {
 
        alert("Please enter an answer");
 
        return;
 
    }
 
    const answerData = {
 
        content: content,
        postedBy:localStorage.getItem("name"),
 
        question: {
            questionId: id
        }
 
    };
 
    axios.post(
        "http://localhost:8080/answers",
        answerData,
        {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
    .then(() => {
 
        alert("Answer Added Successfully");
 
        setContent("");
 
        loadAnswers();
 
    })
    .catch((err) => {
 
        console.log(err);
 
        alert("Failed to Add Answer");
 
    });
 
};
 
return (
    <>
        <Navbar />
 
        <div className="container mt-4">
 
            <button
                className="btn btn-outline-primary mb-3"
                onClick={() => navigate("/questions")}
            >
                ← Back to Questions
            </button>
 
            {question && (
 
                <div className="card shadow mb-4">
 
                    <div className="card-body">
 
                        <h3>
                            {question.title}
                        </h3>
 
                        <p>
                            {question.description}
                        </p>
 
                        <span className="badge bg-primary">
                            {question.category}
                        </span>
 
                    </div>
 
                </div>
 
            )}
 
            <div className="card shadow mb-4">
 
                <div className="card-header bg-success text-white">
 
                    <h5 className="mb-0">
                        Add Answer
                    </h5>
 
                </div>
 
                <div className="card-body">
 
                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Write your answer..."
                        value={content}
                        onChange={(e) =>
                            setContent(e.target.value)
                        }
                    />
 
                    <button
                        className="btn btn-success mt-3"
                        onClick={submitAnswer}
                    >
                        Submit Answer
                    </button>
 
                </div>
 
            </div>
 
            <div className="card shadow">
 
                <div className="card-header bg-dark text-white">
 
                    <h5 className="mb-0">
                        Answers
                    </h5>
 
                </div>
 
                <div className="card-body">
 
                    {answers.length === 0 ? (
 
                        <p className="text-muted">
                            No Answers Available
                        </p>
 
                    ) : (
 
                        answers.map((answer) => (
 
                            <div
                                key={answer.answerId}
                                className="card mt-3 border"
                            >
 
                                <div className="card-body">
 
                                    <p>
                                        {answer.content}
                                    </p>
                                    <p>
                                        <strong>Answered By:</strong>{" "}
                                        {answer.postedBy ? answer.postedBy : "Unknown user"}
                                    </p>
 
                                    <small className="text-muted">
 
                                        Posted on:
 
                                        {" "}
 
                                        {answer.createdAt
                                            ? new Date(
                                                  answer.createdAt
                                              ).toLocaleString()
                                            : "N/A"}
 
                                    </small>
 
                                </div>
 
                            </div>
 
                        ))
 
                    )}
 
                </div>
 
            </div>
 
        </div>
    </>
);
 
}
 
export default QuestionDetails;





































// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../layout/Navbar";
// import QuestionService from "../../services/QuestionService";
// import AnswerService from "../../services/AnswerService";
 
// function QuestionDetails() {
 
//     const { id } = useParams();
 
//     const [question, setQuestion] = useState({});
//     const [answers, setAnswers] = useState([]);
 
//     const [answerText, setAnswerText] = useState("");
 
//     useEffect(() => {
//         if(id){
//         loadQuestion();
//         loadAnswers();
//         }
//     }, [id]);
 
//     const loadQuestion = () => {
 
//         QuestionService.getQuestionById(id)
//             .then((response) => {
//                 setQuestion(response.data);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
 
//     const loadAnswers = () => {
 
//         AnswerService.getAnswersByQuestionId(id)
//             .then((response) => {
//                 setAnswers(response.data);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
 
//     const submitAnswer = (e) => {
 
//         e.preventDefault();
 
//         const answer = {
 
//             content: answerText,
 
//             question: {
//                 questionId: id
//             }
//         };
 
//         AnswerService.addAnswer(answer)
//             .then(() => {
 
//                 alert("Answer Added Successfully");
 
//                 setAnswerText("");
 
//                 loadAnswers();
//             })
//             .catch((error) => {
 
//                 console.error(error);
 
//                 alert("Failed to Add Answer");
//             });
//     };
 
//     return (
//         <>
//             <Navbar />
 
//             <div className="container mt-4">
 
//                 <div className="card shadow mb-4">
 
//                     <div className="card-body">
 
//                         <h2>{question.title}</h2>
 
//                         <hr />
 
//                         <p>{question.description}</p>
 
//                         <p>
//                             <strong>Category:</strong>{" "}
//                             {question.category}
//                         </p>
 
//                     </div>
 
//                 </div>
 
//                 <div className="card mb-4">
 
//                     <div className="card-header">
//                         <h4>Add Answer</h4>
//                     </div>
 
//                     <div className="card-body">
 
//                         <form onSubmit={submitAnswer}>
 
//                             <textarea
//                                 className="form-control mb-3"
//                                 rows="4"
//                                 placeholder="Write your answer..."
//                                 value={answerText}
//                                 onChange={(e) =>
//                                     setAnswerText(
//                                         e.target.value
//                                     )
//                                 }
//                                 required
//                             />
 
//                             <button
//                                 type="submit"
//                                 className="btn btn-success"
//                             >
//                                 Submit Answer
//                             </button>
 
//                         </form>
 
//                     </div>
 
//                 </div>
 
//                 <h3>Answers</h3>
 
//                 {answers.length === 0 ? (
 
//                     <div className="alert alert-warning">
//                         No Answers Available
//                     </div>
 
//                 ) : (
 
//                     answers.map((answer) => (
 
//                         <div
//                             className="card mb-3"
//                             key={answer.answerId}
//                         >
//                             <div className="card-body">
 
//                                 <p>
//                                     {answer.content}
//                                 </p>
 
//                             </div>
//                         </div>
 
//                     ))
 
//                 )}
 
//             </div>
//         </>
//     );
// }
 
// export default QuestionDetails;
 