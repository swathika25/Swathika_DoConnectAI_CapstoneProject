package com.wipro.doconnectai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.doconnectai.entity.User;
import com.wipro.doconnectai.repository.UserRepository;
import com.wipro.doconnectai.service.IUser;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
    private IUser userService;
	
	@Autowired
	private UserRepository userRepository;
 
    // Register new user
    @PostMapping
    public ResponseEntity<User> registerUser(@Valid @RequestBody User user) {
    	log.info("User Registred successfully");
        return ResponseEntity.ok(userService.registerUser(user));
    }
 
    // Get all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
    	log.info("Retrieving all users");
        return ResponseEntity.ok(userService.getAllUsers());
    }
    
    @GetMapping("/role/{role}")
    public List<User>getUsersByRole(@PathVariable String role){
    	log.info("Retrieving user with role");
    	return userRepository.findByRole(role);
    }
 
    // Get user by id
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
    	log.info("Retrieving user by id");
        return ResponseEntity.ok(userService.getUserById(id));
    }
 
    // Update user
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody User user) {
    	log.info("Updating user with id");
        return ResponseEntity.ok(userService.updateUser(id, user));
    }
 
    // Delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
 
        userService.deleteUser(id);
        log.info("User deleted successfully with id");
        return ResponseEntity.ok("User deleted successfully");
    }

}
