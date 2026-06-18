package com.wipro.doconnectai.service;

import java.util.List;

import com.wipro.doconnectai.entity.Notification;

public interface INotification {

	Notification createNotification(Notification notification);
	 
    List<Notification> getAllNotifications();
 
    // Notification getNotificationById(Long notificationId);
 
    void deleteNotification(Long notificationId);

	List<Notification> getNotificationsByUserId(Long userId);
}
