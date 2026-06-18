package com.wipro.doconnectai.entity;

import java.time.LocalDateTime;

import jakarta.persistence.GenerationType;
import jakarta.validation.constraints.NotBlank;
import jakarta.persistence.*;
@Entity
@Table(name="answers")
public class Answer {
	
	
	//primary key
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long answerId;
	
	//Answer content
	//validation: Answer cannot be null
	@NotBlank(message="Answer content is required")
	private String content;
	
	//related question id
	//private Long questionId;
	
	
	// user who posted the answer
	// private Long userId;
	
	
	//Answer creation time
	private LocalDateTime createdAt;
	
	private String postedBy;
	
	public String getPostedBy() {
		return postedBy;
	}


	public void setPostedBy(String postedBy) {
		this.postedBy = postedBy;
	}
	// many answers belong to one question
	@ManyToOne
	@JoinColumn(name="question_id", nullable = false)
	private Question question;
	
	
	// many answers can be posted by one user
	@ManyToOne
	@JoinColumn(name="user_id", nullable = false)
	private User user;


	public Answer() {
		super();
	}


	public Answer(Long answerId, String content, LocalDateTime createdAt) {
		super();
		this.answerId = answerId;
		this.content = content;
		this.createdAt = createdAt;
	}


	public Long getAnswerId() {
		return answerId;
	}


	public void setAnswerId(Long answerId) {
		this.answerId = answerId;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public LocalDateTime getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question=question;
	}
	

}
