package com.wipro.doconnectai.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="notifications")
public class Notification {
	
	public Long getNotificationId() {
		return notificationId;
	}


	public void setNotificationId(Long notificationId) {
		this.notificationId = notificationId;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public Boolean getIsRead() {
		return isRead;
	}


	public void setIsRead(Boolean isRead) {
		this.isRead = isRead;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	//primary key
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long notificationId;
	
	//Notification text
	//validation : Notification message can not be null or empty
	@NotBlank(message="Notification message is required")
	private String message;
	
	//users who receives notifications
	// private Long userId;
	
	
	//Read Status
	private Boolean isRead;
	
	
	//many notification belong to one user
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;

}
