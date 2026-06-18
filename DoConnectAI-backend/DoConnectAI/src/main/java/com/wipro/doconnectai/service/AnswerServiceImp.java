package com.wipro.doconnectai.service;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.doconnectai.entity.Answer;
import com.wipro.doconnectai.entity.Notification;
import com.wipro.doconnectai.entity.Question;
import com.wipro.doconnectai.entity.User;
import com.wipro.doconnectai.repository.AnswerRepository;
import com.wipro.doconnectai.repository.NotificationRepository;
import com.wipro.doconnectai.repository.QuestionRepository;
import com.wipro.doconnectai.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class AnswerServiceImp implements IAnswer{

	@Autowired
    private AnswerRepository answerRepository;
 
	@Autowired
	private QuestionRepository questionRepository;
	
	@Autowired
	private NotificationRepository notificationRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Answer addAnswer(Answer answer) {
	 
	answer.setCreatedAt(LocalDateTime.now());
	Long qid = answer.getQuestion().getQuestionId();
	 
	Question question = questionRepository.findById(qid).orElseThrow(() ->new RuntimeException( "Question not found"));
	 
	answer.setQuestion(question);
	 
	// Save Answer
	Answer savedAnswer = answerRepository.save(answer);
	log.info("Answer saved succesfully");
	 
	// Find Question Owner
	String questionOwner =question.getPostedBy();
	 
	User user = userRepository.findByName(questionOwner);
	 
	// Create Notification
	Notification notification =new Notification();
	 
	notification.setMessage(answer.getPostedBy()+ " answered your question: "+ question.getTitle());
	 
	notification.setIsRead(false);
	 
	notification.setUser(user);
	 
	notificationRepository.save(notification);
	 log.info("Notification sent to user who posted");
	return savedAnswer;
	 
	}

//    @Override
//    public Answer addAnswer(Answer answer) {
//    	answer.setCreatedAt(LocalDateTime.now());
//    	Long qid = answer.getQuestion().getQuestionId();
//    	Question question = questionRepository.findById(qid).orElseThrow(()->new RuntimeException("Question not found"));
//    	answer.setQuestion(question);
//        return answerRepository.save(answer);
//    }
 
    @Override
    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }
    
    @Override
    public List<Answer>getAnswerByQuestionId(Long questionId){
    	return answerRepository.findByQuestionQuestionId(questionId);
    }
 
    @Override
    public Answer getAnswerById(Long answerId) {
        return answerRepository.findById(answerId).orElse(null);
    }
 
    @Override
    public Answer updateAnswer(Long answerId, Answer answer) {
        answer.setAnswerId(answerId);
        return answerRepository.save(answer);
    }
 
    @Override
    public void deleteAnswer(Long answerId) {
        answerRepository.deleteById(answerId);
    }
}
