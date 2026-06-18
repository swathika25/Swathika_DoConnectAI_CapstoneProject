import axiosInstance from "../config/axiosConfig";
 
const getAnswersByQuestionId = (questionId) => {
    return axiosInstance.get(
        `/answers/question/${questionId}`
    );
};
 
const addAnswer = (answer) => {
    return axiosInstance.post(
        "/answers",
        answer
    );
};
 
const AnswerService = {
    getAnswersByQuestionId,
    addAnswer
};
 
export default AnswerService;