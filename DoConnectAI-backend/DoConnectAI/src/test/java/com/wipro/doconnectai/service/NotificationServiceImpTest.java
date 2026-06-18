
package com.wipro.doconnectai.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.wipro.doconnectai.entity.Notification;
import com.wipro.doconnectai.repository.NotificationRepository;

class NotificationServiceImpTest {

    @Mock
    private NotificationRepository notificationRepository;

    @InjectMocks
    private NotificationServiceImp notificationService;

    private Notification notification;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        notification = new Notification();
        notification.setNotificationId(1L);
        notification.setMessage("Test notification");
    }

    @Test
    void testCreateNotification() {
        when(notificationRepository.save(notification)).thenReturn(notification);

        Notification savedNotification = notificationService.createNotification(notification);

        assertNotNull(savedNotification);
        assertEquals("Test notification", savedNotification.getMessage());
        verify(notificationRepository, times(1)).save(notification);
    }

    @Test
    void testGetAllNotifications() {
        when(notificationRepository.findAll()).thenReturn(Arrays.asList(notification));

        List<Notification> notifications = notificationService.getAllNotifications();

        assertEquals(1, notifications.size());
        assertEquals("Test notification", notifications.get(0).getMessage());
        verify(notificationRepository, times(1)).findAll();
    }

    @Test
    void testGetNotificationsByUserId() {
        Long userId = 100L;
        when(notificationRepository.findByUserUserId(userId)).thenReturn(Arrays.asList(notification));

        List<Notification> notifications = notificationService.getNotificationsByUserId(userId);

        assertEquals(1, notifications.size());
        verify(notificationRepository, times(1)).findByUserUserId(userId);
    }

    @Test
    void testDeleteNotification() {
        Long notificationId = 1L;
        doNothing().when(notificationRepository).deleteById(notificationId);

        notificationService.deleteNotification(notificationId);

        verify(notificationRepository, times(1)).deleteById(notificationId);
    }
}
