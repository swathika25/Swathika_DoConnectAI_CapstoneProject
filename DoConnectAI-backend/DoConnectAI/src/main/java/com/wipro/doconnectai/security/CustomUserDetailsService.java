package com.wipro.doconnectai.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.wipro.doconnectai.entity.User;
import com.wipro.doconnectai.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {
	
	 @Autowired
	    private UserRepository userRepository;
	 
	    @Override
	    public UserDetails loadUserByUsername(String email)
	            throws UsernameNotFoundException {
	 
	        User user = userRepository.findByEmail(email)
	                .orElseThrow(() ->
	                        new UsernameNotFoundException("User not found"));
	 
	        return org.springframework.security.core.userdetails.User
	                .withUsername(user.getEmail())
	                .password(user.getPassword())
	                .authorities(user.getRole())
	                .build();
	    }
	

}
