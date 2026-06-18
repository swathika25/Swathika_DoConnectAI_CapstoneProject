package com.wipro.doconnectai.dto;

public class ChatRoomDTO {
	
private Long roomId;
	
	//chat room name
	private String roomName;
	
	// chat room description
	private String description;

	public ChatRoomDTO() {
		super();
	}

	public ChatRoomDTO(Long roomId, String roomName, String description) {
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
