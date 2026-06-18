package com.wipro.doconnectai.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.doconnectai.entity.Notification;
import com.wipro.doconnectai.repository.NotificationRepository;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Service
public class NotificationServiceImp implements INotification{

	@Autowired
    private NotificationRepository notificationRepository;
 
    @Override
    public Notification createNotification(Notification notification) {
        log.info("Creating notifications");
        return notificationRepository.save(notification);
    }
 
    @Override
    public List<Notification> getAllNotifications() {
        log.info("Retreving all notifications");
        return notificationRepository.findAll();
    }
 
//    @Override
//    public Notification getNotificationById(Long notificationId) {
//        return notificationRepository.findById(notificationId).orElse(null);
//    }
 
    
    @Override
    public List<Notification>
    getNotificationsByUserId(Long userId) {
     log.info("Retreving notifications by user id");
    return notificationRepository.findByUserUserId(userId);
     
    }
    
    
    
    @Override
    public void deleteNotification(Long notificationId) {
        log.info("Deleting notifications with id");
        notificationRepository.deleteById(notificationId);
    }
}
