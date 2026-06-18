package com.wipro.doconnectai.service;

import java.util.List;

import com.wipro.doconnectai.entity.User;

public interface IUser {

	User registerUser(User user);
	 
    List<User> getAllUsers();
 
    User getUserById(Long userId);
 
    User updateUser(Long userId, User user);
 
    void deleteUser(Long userId);
}
