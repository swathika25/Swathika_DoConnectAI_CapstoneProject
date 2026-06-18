package com.wipro.doconnectai.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.doconnectai.entity.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer,Long>{
	
	

	List<Answer>findByQuestionQuestionId(Long questionId);
}
