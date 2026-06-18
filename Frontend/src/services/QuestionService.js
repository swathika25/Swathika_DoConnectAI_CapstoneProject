import axiosInstance from "../config/axiosConfig";
 
const getAllQuestions = () => {
    return axiosInstance.get(
        "/questions"
    );
};
 
const getQuestionById = (id) => {
    return axiosInstance.get(
        `/questions/${id}`
    );
};
 
const addQuestion = (question) => {
    return axiosInstance.post(
        "/questions",
        question
    );
};
 
const updateQuestion = (id, question) => {
    return axiosInstance.put(
        `/questions/${id}`,
        question
    );
};
 
const deleteQuestion = (id) => {
    return axiosInstance.delete(
        `/questions/${id}`
    );
};
 
const QuestionService = {
    getAllQuestions,
    getQuestionById,
    addQuestion,
    updateQuestion,
    deleteQuestion
};
 
export default QuestionService;