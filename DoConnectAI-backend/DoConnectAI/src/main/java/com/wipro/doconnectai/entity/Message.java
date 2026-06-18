package com.wipro.doconnectai.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="messages")
public class Message {

	
	//primary key
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long messageId;
	
	
	//message content
	//validation : message content can not be null
	@NotBlank(message="Message content can not be empty")
	private String content;
	
	//Room where message is sent
	//private Long roomId;
	
	//user who sent message
	//private Long userId;
	
	//message sent time
	private LocalDateTime sentTime;
	
	//Many messages belong to one chat room
	@ManyToOne
	@JoinColumn(name="room_id")
	private ChatRoom chatRoom;
	
	
	//Many messages can be sent by one user
	@ManyToOne
	@JoinColumn(name="user_id")
	private User sender;
	

	public Message() {
		super();
	}

	public Message(Long messageId, String content, LocalDateTime sentTime) {
		super();
		this.messageId = messageId;
		this.content = content;
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

	public LocalDateTime getSentTime() {
		return sentTime;
	}

	public void setSentTime(LocalDateTime sentTime) {
		this.sentTime = sentTime;
	}
	
	
}
