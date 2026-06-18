package com.wipro.doconnectai.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.wipro.doconnectai.entity.User;
import com.wipro.doconnectai.exception.ResourceNotFoundException;
import com.wipro.doconnectai.exception.UserAlreadyExistsException;
import com.wipro.doconnectai.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserServiceImp implements IUser{

	@Autowired
    private UserRepository userRepository;
 
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public long getUserCount() {
        log.info("Retreving total users count");
		return userRepository.countByRole("USER");
	}
	
	public long getAdminCount() {
        log.info("Retreving total admins count");
		return userRepository.countByRole("ADMIN");
	}
	
    @Override
    public User registerUser(User user) {
    	if(userRepository.existsByEmail(user.getEmail())) {
            log.info("User already exist with email");
    		throw new UserAlreadyExistsException("Email already registred");
    	}
    	//Encrypt password before saving
    	user.setPassword(
    	passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
 
    @Override
    public List<User> getAllUsers() {
        log.info("Retreving all users");
        return userRepository.findAll();
    }
 
    @Override
    public User getUserById(Long userId) {
        log.error("User found with id");
        return userRepository.findById(userId).orElseThrow(()->
        new ResourceNotFoundException("User not found with id : "+ userId));
    }
 
    @Override
    public User updateUser(Long userId, User user) {
        user.setUserId(userId);
        if(userRepository.existsByEmail(user.getEmail())) {
        	throw new UserAlreadyExistsException("Email already registered");
        }
        log.info("User updated successfully");
        return userRepository.save(user);
    }
 
    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
        log.info("Deleting user with id");
    }
	
}
