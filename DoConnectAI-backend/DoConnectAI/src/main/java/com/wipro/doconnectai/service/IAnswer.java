package com.wipro.doconnectai.service;

import java.util.List;

import com.wipro.doconnectai.entity.Answer;

public interface IAnswer {

	Answer addAnswer(Answer answer);
	 
    List<Answer> getAllAnswers();
 
    Answer getAnswerById(Long answerId);
 
    Answer updateAnswer(Long answerId, Answer answer);
    List<Answer>getAnswerByQuestionId(Long questionId);
 
    void deleteAnswer(Long answerId);
}
