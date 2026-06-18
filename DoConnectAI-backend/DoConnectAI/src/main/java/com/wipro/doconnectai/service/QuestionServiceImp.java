package com.wipro.doconnectai.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.doconnectai.entity.Question;
import com.wipro.doconnectai.repository.QuestionRepository;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Service
public class QuestionServiceImp implements IQuestion{

	@Autowired
    private QuestionRepository questionRepository;
 
    @Override
    public Question addQuestion(Question question) {
    	 question.setPostedBy(question.getPostedBy());
    	question.setCreatedAt(LocalDateTime.now());
        log.info("Adding new question");
        return questionRepository.save(question);
    }
 
    @Override
    public List<Question> getAllQuestions() {
        log.info("Retreving all questions");
        return questionRepository.findAll();
    }
 
    @Override
    public Question getQuestionById(Long questionId) {
        log.info("Retreving questions with id");
        return questionRepository.findById(questionId).orElse(null);
    }
 
    @Override
    public Question updateQuestion(Long questionId, Question question) {
        question.setQuestionId(questionId);
        log.info("Updating questions with id");
        return questionRepository.save(question);
    }
 
    @Override
    public void deleteQuestion(Long questionId) {
        log.info("Deleting questions with id");
        questionRepository.deleteById(questionId);
    }
}
