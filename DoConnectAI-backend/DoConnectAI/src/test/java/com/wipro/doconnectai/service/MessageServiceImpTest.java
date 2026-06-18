package com.wipro.doconnectai.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.wipro.doconnectai.entity.Message;
import com.wipro.doconnectai.repository.MessageRepository;

class MessageServiceImpTest {

    @Mock
    private MessageRepository messageRepository;

    @InjectMocks
    private MessageServiceImp messageService;

    private Message message;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        message = new Message();
        message.setMessageId(1L);
        message.setContent("Hello World");
    }

    @Test
    void testSendMessage() {
        when(messageRepository.save(message)).thenReturn(message);

        Message savedMessage = messageService.sendMessage(message);

        assertNotNull(savedMessage);
        assertEquals("Hello World", savedMessage.getContent());
        verify(messageRepository, times(1)).save(message);
    }

    @Test
    void testGetAllMessages() {
        when(messageRepository.findAll()).thenReturn(Arrays.asList(message));

        List<Message> messages = messageService.getAllMessages();

        assertEquals(1, messages.size());
        assertEquals("Hello World", messages.get(0).getContent());
        verify(messageRepository, times(1)).findAll();
    }

    @Test
    void testGetMessageById_Found() {
        when(messageRepository.findById(1L)).thenReturn(Optional.of(message));

        Message foundMessage = messageService.getMessageById(1L);

        assertNotNull(foundMessage);
        assertEquals("Hello World", foundMessage.getContent());
        verify(messageRepository, times(1)).findById(1L);
    }

    @Test
    void testGetMessageById_NotFound() {
        when(messageRepository.findById(1L)).thenReturn(Optional.empty());

        Message foundMessage = messageService.getMessageById(1L);

        assertNull(foundMessage);
        verify(messageRepository, times(1)).findById(1L);
    }

    @Test
    void testDeleteMessage() {
        doNothing().when(messageRepository).deleteById(1L);

        messageService.deleteMessage(1L);

        verify(messageRepository, times(1)).deleteById(1L);
    }
}

