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
import org.springframework.security.crypto.password.PasswordEncoder;

import com.wipro.doconnectai.entity.User;
import com.wipro.doconnectai.exception.ResourceNotFoundException;
import com.wipro.doconnectai.exception.UserAlreadyExistsException;
import com.wipro.doconnectai.repository.UserRepository;

class UserServiceImpTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserServiceImp userService;

    private User user;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        user = new User();
        user.setUserId(1L);
        user.setEmail("test@example.com");
        user.setPassword("password123");
        user.setRole("USER");
    }

    @Test
    void testGetUserCount() {
        when(userRepository.countByRole("USER")).thenReturn(5L);
        assertEquals(5L, userService.getUserCount());
    }

    @Test
    void testGetAdminCount() {
        when(userRepository.countByRole("ADMIN")).thenReturn(2L);
        assertEquals(2L, userService.getAdminCount());
    }

    @Test
    void testRegisterUser_Success() {
        when(userRepository.existsByEmail(user.getEmail())).thenReturn(false);
        when(passwordEncoder.encode(user.getPassword())).thenReturn("encodedPassword");
        when(userRepository.save(user)).thenReturn(user);

        User savedUser = userService.registerUser(user);

        assertEquals("encodedPassword", savedUser.getPassword());
        verify(userRepository, times(1)).save(user);
    }

    @Test
    void testRegisterUser_EmailAlreadyExists() {
        when(userRepository.existsByEmail(user.getEmail())).thenReturn(true);

        assertThrows(UserAlreadyExistsException.class, () -> userService.registerUser(user));
    }

    @Test
    void testGetAllUsers() {
        when(userRepository.findAll()).thenReturn(Arrays.asList(user));
        List<User> users = userService.getAllUsers();
        assertEquals(1, users.size());
    }

    @Test
    void testGetUserById_Success() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        User foundUser = userService.getUserById(1L);
        assertEquals("test@example.com", foundUser.getEmail());
    }

    @Test
    void testGetUserById_NotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class, () -> userService.getUserById(1L));
    }

    @Test
    void testUpdateUser_Success() {
        user.setEmail("new@example.com");
        when(userRepository.existsByEmail(user.getEmail())).thenReturn(false);
        when(userRepository.save(user)).thenReturn(user);

        User updatedUser = userService.updateUser(1L, user);
        assertEquals("new@example.com", updatedUser.getEmail());
    }

    @Test
    void testUpdateUser_EmailAlreadyExists() {
        when(userRepository.existsByEmail(user.getEmail())).thenReturn(true);
        assertThrows(UserAlreadyExistsException.class, () -> userService.updateUser(1L, user));
    }

    @Test
    void testDeleteUser() {
        doNothing().when(userRepository).deleteById(1L);
        userService.deleteUser(1L);
        verify(userRepository, times(1)).deleteById(1L);
    }
}
