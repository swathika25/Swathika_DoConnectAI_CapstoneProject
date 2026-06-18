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

import com.wipro.doconnectai.entity.ChatRoom;
import com.wipro.doconnectai.repository.ChatRoomRepository;

class ChatRoomServiceImpTest {

    @Mock
    private ChatRoomRepository chatRoomRepository;

    @InjectMocks
    private ChatRoomServiceImp chatRoomService;

    private ChatRoom chatRoom;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        chatRoom = new ChatRoom();
        chatRoom.setRoomId(1L);
        chatRoom.setRoomName("Java Discussion");
    }

    @Test
    void testCreateRoom() {
        when(chatRoomRepository.save(chatRoom)).thenReturn(chatRoom);

        ChatRoom savedRoom = chatRoomService.createRoom(chatRoom);

        assertNotNull(savedRoom);
        assertEquals("General Room", savedRoom.getRoomName());
        verify(chatRoomRepository, times(1)).save(chatRoom);
    }

    @Test
    void testGetAllRooms() {
        when(chatRoomRepository.findAll()).thenReturn(Arrays.asList(chatRoom));

        List<ChatRoom> rooms = chatRoomService.getAllRooms();

        assertEquals(1, rooms.size());
        assertEquals("General Room", rooms.get(0).getRoomName());
        verify(chatRoomRepository, times(1)).findAll();
    }

    @Test
    void testGetRoomById_Found() {
        when(chatRoomRepository.findById(1L)).thenReturn(Optional.of(chatRoom));

        ChatRoom foundRoom = chatRoomService.getRoomById(1L);

        assertNotNull(foundRoom);
        assertEquals("General Room", foundRoom.getRoomName());
        verify(chatRoomRepository, times(1)).findById(1L);
    }

    @Test
    void testGetRoomById_NotFound() {
        when(chatRoomRepository.findById(1L)).thenReturn(Optional.empty());

        ChatRoom foundRoom = chatRoomService.getRoomById(1L);

        assertNull(foundRoom);
        verify(chatRoomRepository, times(1)).findById(1L);
    }

    @Test
    void testDeleteRoom() {
        doNothing().when(chatRoomRepository).deleteById(1L);

        chatRoomService.deleteRoom(1L);

        verify(chatRoomRepository, times(1)).deleteById(1L);
    }
}

