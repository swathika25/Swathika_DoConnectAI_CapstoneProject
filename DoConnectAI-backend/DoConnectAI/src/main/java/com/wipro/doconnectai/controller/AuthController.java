package com.wipro.doconnectai.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
 
import com.wipro.doconnectai.dto.AuthResponse;
import com.wipro.doconnectai.dto.LoginRequest;
import com.wipro.doconnectai.entity.User;
import com.wipro.doconnectai.repository.UserRepository;
import com.wipro.doconnectai.security.JwtUtil;
 
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
 
@Autowired
private UserRepository userRepository;
 
@Autowired
private PasswordEncoder passwordEncoder;
 
@Autowired
private JwtUtil jwtUtil;
 
// REGISTER API
@PostMapping("/register")
public ResponseEntity<?> register(
        @RequestBody User user) {
 
    user.setPassword(
            passwordEncoder.encode(
                    user.getPassword()));
 
    if (user.getRole() == null
            || user.getRole().isEmpty()) {
 
        user.setRole("USER");
    }
 
    User savedUser =
            userRepository.save(user);
 
    return ResponseEntity.ok(savedUser);
}
 
// LOGIN API
@PostMapping("/login")
public ResponseEntity<?> login(
        @RequestBody LoginRequest request) {
 
    User user =
            userRepository
                    .findByEmail(
                            request.getEmail())
                    .orElseThrow(() ->
                            new RuntimeException(
                                    "Invalid Email"));
 
    if (!passwordEncoder.matches(
            request.getPassword(),
            user.getPassword())) {
 
        throw new RuntimeException(
                "Invalid Password");
    }
 
    String token =
            jwtUtil.generateToken(
                    user.getEmail());
 
    AuthResponse response =
            new AuthResponse(
                    token,
                    user.getRole(),
                    user.getName(),
                    user.getUserId());
 
    return ResponseEntity.ok(response);
}
 
}




























