package com.wipro.doconnectai.entity;

import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="chatrooms")
public class ChatRoom {

	//primary key
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long roomId;
	
	//chat room name
	// validation :chat room name cannot be null
	@NotBlank(message="Room name is required")
	private String roomName;
	
	// chat room description
	private String description;
	
	//One room can contain many messages
	@OneToMany(mappedBy="chatRoom")
	private List<Message> message;

	public ChatRoom() {
		super();
	}

	public ChatRoom(Long roomId, String roomName, String description) {
		super();
		this.roomId = roomId;
		this.roomName = roomName;
		this.description = description;
	}

	public Long getRoomId() {
		return roomId;
	}

	public void setRoomId(Long roomId) {
		this.roomId = roomId;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
}
