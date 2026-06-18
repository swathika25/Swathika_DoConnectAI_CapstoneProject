package com.wipro.doconnectai.dto;

import java.time.LocalDateTime;

public class AnswerDTO {
	
private Long answerId;
	
	//Answer content
	private String content;
	
	//related question id
	private Long questionId;
	
	
	// user who posted the answer
	private Long userId;
	
	
	//Answer creation time
	private LocalDateTime createdAt;


	public AnswerDTO() {
		super();
	}


	public AnswerDTO(Long answerId, String content, Long questionId, Long userId, LocalDateTime createdAt) {
		super();
		this.answerId = answerId;
		this.content = content;
		this.questionId = questionId;
		this.userId = userId;
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


	public Long getQuestionId() {
		return questionId;
	}


	public void setQuestionId(Long questionId) {
		this.questionId = questionId;
	}


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public LocalDateTime getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	

}
