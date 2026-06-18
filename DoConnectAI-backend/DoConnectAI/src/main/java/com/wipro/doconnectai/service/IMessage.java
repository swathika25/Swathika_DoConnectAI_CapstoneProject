package com.wipro.doconnectai.service;

import java.util.List;

import com.wipro.doconnectai.entity.Message;

public interface IMessage {

	Message sendMessage(Message message);
	 
    List<Message> getAllMessages();
 
    Message getMessageById(Long messageId);
 
    void deleteMessage(Long messageId);
}
