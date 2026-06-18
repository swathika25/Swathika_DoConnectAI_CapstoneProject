package com.wipro.doconnectai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wipro.doconnectai.entity.Message;
import com.wipro.doconnectai.service.IMessage;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/messages")
public class MessageController {

	 @Autowired
	    private IMessage messageService;
	 
	    // Send message
	    @PostMapping
	    public ResponseEntity<Message> sendMessage(
	            @Valid @RequestBody Message message) {
	    	log.info("Message sent successfully");
	        return ResponseEntity.ok(
	                messageService.sendMessage(message));
	    }
	 
	    // Get all messages
	    @GetMapping
	    public ResponseEntity<List<Message>> getAllMessages() {
	    	log.info("Retrieving messages");
	        return ResponseEntity.ok(
	                messageService.getAllMessages());
	    }
	 
	    // Get message by id
	    @GetMapping("/{id}")
	    public ResponseEntity<Message> getMessageById(
	            @PathVariable Long id) {
	    	log.info("Retrieving messages with id");
	        return ResponseEntity.ok(
	                messageService.getMessageById(id));
	    }
	 
	    // Delete message
	    @DeleteMapping("/{id}")
	    public ResponseEntity<String> deleteMessage(
	            @PathVariable Long id) {
	    	log.info("Deleting messages with id");
	        messageService.deleteMessage(id);
	 
	        return ResponseEntity.ok(
	                "Message deleted successfully");
	    }
}
