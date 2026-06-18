package com.wipro.doconnectai.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="questions")
public class Question {

	//Primary key
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long questionId;
	
	//Question title
	private String title;
	
	//Detailed question description
	//validation : question description can not be null
	@NotBlank(message="Description is required")
	private String description;
	
	
	//Tags seperated by commas
	private String tags;
	
	//user who posted question
	//private Long userId;
	
	private LocalDateTime createdAt;
	
	
	private String postedBy;
	
	public String getPostedBy() {
		return postedBy;
	}

	public void setPostedBy(String postedBy) {
		this.postedBy = postedBy;
	}

	//many qquestions can belong to one user
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	//one question can have many answers
	@OneToMany(mappedBy="question")
	private List<Answer> answers;
	

	public Question() {
		super();
	}

	public Question(Long questionId, String title, String description, String tags,
			LocalDateTime createdAt) {
		super();
		this.questionId = questionId;
		this.title = title;
		this.description = description;
		this.tags = tags;
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

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	
	
	
}
