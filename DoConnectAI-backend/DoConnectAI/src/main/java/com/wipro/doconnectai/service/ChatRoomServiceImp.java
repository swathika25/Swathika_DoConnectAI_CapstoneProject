package com.wipro.doconnectai.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.doconnectai.entity.ChatRoom;
import com.wipro.doconnectai.repository.ChatRoomRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ChatRoomServiceImp implements IChatRoom{

	@Autowired
    private ChatRoomRepository chatRoomRepository;
 
    @Override
    public ChatRoom createRoom(ChatRoom chatRoom) {
        log.info("ChatRoom Created");
        return chatRoomRepository.save(chatRoom);
    }
 
    @Override
    public List<ChatRoom> getAllRooms() {
        log.info("Getting all chat rooms");
        return chatRoomRepository.findAll();
    }
 
    @Override
    public ChatRoom getRoomById(Long roomId) {
        log.info("Retreving chat room with id");
        return chatRoomRepository.findById(roomId).orElse(null);
    }
 
    @Override
    public void deleteRoom(Long roomId) {
        
        chatRoomRepository.deleteById(roomId);
        log.info("chatrooms deleted Successfully");
    }
}
