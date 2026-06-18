package com.wipro.doconnectai.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.doconnectai.entity.Message;
import com.wipro.doconnectai.repository.MessageRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MessageServiceImp implements IMessage{
	
	@Autowired
    private MessageRepository messageRepository;
 
    @Override
    public Message sendMessage(Message message) {
        log.info("Sending messages");
        return messageRepository.save(message);
    }
 
    @Override
    public List<Message> getAllMessages() {
        log.info("Retreving all messages");
        return messageRepository.findAll();
    }
 
    @Override
    public Message getMessageById(Long messageId) {
        log.info("Retreving messages by id");
        return messageRepository.findById(messageId).orElse(null);
    }
 
    @Override
    public void deleteMessage(Long messageId) {
        log.info("Deleting messages by id");
        messageRepository.deleteById(messageId);
        log.info("Message deleted successfully");
    }

}
