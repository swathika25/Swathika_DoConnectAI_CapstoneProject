package com.wipro.doconnectai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wipro.doconnectai.entity.Notification;
import com.wipro.doconnectai.service.INotification;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/notifications")
public class NotificationController {

	@Autowired
    private INotification notificationService;
 
    // Create notification
    @PostMapping
    public ResponseEntity<Notification> createNotification(@Valid @RequestBody Notification notification) {
    	log.info("Notification created succesfully");
        return ResponseEntity.ok(
                notificationService.createNotification(notification));
    }
 
    // Get all notifications
    @GetMapping
    public ResponseEntity<List<Notification>> getAllNotifications() {
    	log.info("Retriving all notifications");
        return ResponseEntity.ok(
                notificationService.getAllNotifications());
    }
 
    // Get notification by id
//    @GetMapping("/{id}")
//    public ResponseEntity<Notification> getNotificationById(
//            @PathVariable Long id) {
// 
//        return ResponseEntity.ok(
//                notificationService.getNotificationById(id));
//    }
    
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Notification>>
    getNotificationsByUserId(@PathVariable Long userId) {
    	log.info("Retrieving notifications for userId");
    return ResponseEntity.ok(notificationService.getNotificationsByUserId(userId));
     
    }
    
    
    
 
    // Delete notification
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNotification(@PathVariable Long id) {
 
        notificationService.deleteNotification(id);
        log.info("Notifications deleted Successfully with Id");
        return ResponseEntity.ok(
                "Notification deleted successfully");
    }
}
