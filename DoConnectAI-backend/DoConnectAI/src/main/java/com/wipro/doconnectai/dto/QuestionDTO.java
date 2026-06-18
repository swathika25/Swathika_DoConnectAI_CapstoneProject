package com.wipro.doconnectai.dto;

import java.time.LocalDateTime;

public class QuestionDTO {
	
private Long questionId;
	
	//Question title
	private String title;
	
	//Detailed question description
	private String description;
	
	
	//Tags seperated bt commas
	private String tags;
	
	//user who posted question
	private Long userId;
	
	private LocalDateTime createdAt;

	public QuestionDTO() {
		super();
	}

	public QuestionDTO(Long questionId, String title, String description, String tags, Long userId,
			LocalDateTime createdAt) {
		super();
		this.questionId = questionId;
		this.title = title;
		this.description = description;
		this.tags = tags;
		this.userId = userId;
		this.createdAt = createdAt;
	}

	public Long getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Long questionId) {
		this.questionId = questionId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
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
