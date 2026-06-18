package com.wipro.doconnectai.dto;

public class NotificationDTO {

private Long notificationId;
	
	//Notification text
	private String message;
	
	//users who receives notifications
	private Long userId;
	
	
	//Read Status
	private Boolean isRead;


	public NotificationDTO() {
		super();
	}


	public NotificationDTO(Long notificationId, String message, Long userId, Boolean isRead) {
		super();
		this.notificationId = notificationId;
		this.message = message;
		this.userId = userId;
		this.isRead = isRead;
	}


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


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public Boolean getIsRead() {
		return isRead;
	}


	public void setIsRead(Boolean isRead) {
		this.isRead = isRead;
	}
	
	
}
