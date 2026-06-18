package com.wipro.doconnectai.service;

import java.util.List;

import com.wipro.doconnectai.entity.Question;

public interface IQuestion {

	Question addQuestion(Question question);
	 
    List<Question> getAllQuestions();
 
    Question getQuestionById(Long questionId);
 
    Question updateQuestion(Long questionId, Question question);
 
    void deleteQuestion(Long questionId);
}
