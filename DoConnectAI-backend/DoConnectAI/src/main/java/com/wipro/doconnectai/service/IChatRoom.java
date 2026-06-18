package com.wipro.doconnectai.service;

import java.util.List;

import com.wipro.doconnectai.entity.ChatRoom;

public interface IChatRoom {
	
	ChatRoom createRoom(ChatRoom chatRoom);
	 
    List<ChatRoom> getAllRooms();
 
    ChatRoom getRoomById(Long roomId);
 
    void deleteRoom(Long roomId);

}
