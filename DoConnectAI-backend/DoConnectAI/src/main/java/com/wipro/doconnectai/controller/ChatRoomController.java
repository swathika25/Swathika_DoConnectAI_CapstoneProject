package com.wipro.doconnectai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wipro.doconnectai.entity.ChatRoom;
import com.wipro.doconnectai.service.IChatRoom;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestController
@RequestMapping("/chatrooms")

public class ChatRoomController {

	@Autowired
    private IChatRoom chatRoomService;
 
    // Create room
    @PostMapping
    public ResponseEntity<ChatRoom> createRoom(
            @Valid @RequestBody ChatRoom chatRoom) {
     log.info("Chat room created successfully");
        return ResponseEntity.ok(
                chatRoomService.createRoom(chatRoom));
    }
 
    // Get all rooms
    @GetMapping
    public ResponseEntity<List<ChatRoom>> getAllRooms() {
    	log.info("fetching all chat rooms");
        return ResponseEntity.ok(
                chatRoomService.getAllRooms());
    }
 
    // Get room by id
    @GetMapping("/{id}")
    public ResponseEntity<ChatRoom> getRoomById(
            @PathVariable Long id) {
    	log.info("fetching chat room with id");
        return ResponseEntity.ok(
                chatRoomService.getRoomById(id));
    }
 
    // Delete room
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRoom(
            @PathVariable Long id) {
 
        chatRoomService.deleteRoom(id);
        log.info("Chat room deleted successfully");
        return ResponseEntity.ok(
                "Chat room deleted successfully");
    }
	
}
