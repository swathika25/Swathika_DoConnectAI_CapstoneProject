package com.wipro.doconnectai.controller;

import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wipro.doconnectai.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
	@RequestMapping("/admin")
	public class AdminController {
	 
	    @Autowired
	    private UserRepository userRepository;
	 
	    @GetMapping("/stats")
	    public Map<String, Long> getStats() {
	 
	        Map<String, Long> stats = new HashMap<>();
	 
	        stats.put("userCount",
	                userRepository.countByRole("USER"));
	 
	        stats.put("adminCount",
	                userRepository.countByRole("ADMIN"));
	 
	        stats.put("totalUsers",
	                userRepository.count());
	        log.info("Admin stats API called");
	        
	        return stats;
	    }

}
