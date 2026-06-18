package com.wipro.doconnectai.dto;

import java.time.LocalDateTime;

public class MessageDTO {
	
private Long messageId;
	
	
	//message content
	private String content;
	
	//Room where message is sent
	private Long roomId;
	
	//user who sent message
	private Long userId;
	
	//message sent time
	private LocalDateTime sentTime;

	public MessageDTO() {
		super();
	}

	public MessageDTO(Long messageId, String content, Long roomId, Long userId, LocalDateTime sentTime) {
		super();
		this.messageId = messageId;
		this.content = content;
		this.roomId = roomId;
		this.userId = userId;
		this.sentTime = sentTime;
	}

	public Long getMessageId() {
		return messageId;
	}

	public void setMessageId(Long messageId) {
		this.messageId = messageId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getRoomId() {
		return roomId;
	}

	public void setRoomId(Long roomId) {
		this.roomId = roomId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public LocalDateTime getSentTime() {
		return sentTime;
	}

	public void setSentTime(LocalDateTime sentTime) {
		this.sentTime = sentTime;
	}
	
	

}
