package com.wipro.doconnectai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.doconnectai.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

}
