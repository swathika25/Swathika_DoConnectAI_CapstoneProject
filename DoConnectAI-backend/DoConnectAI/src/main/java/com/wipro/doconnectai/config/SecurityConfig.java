package com.wipro.doconnectai.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.wipro.doconnectai.security.JwtAuthenticationFilter;

@Configuration
public class SecurityConfig {
	
	private final JwtAuthenticationFilter jwtFilter;
	 
    public SecurityConfig(JwtAuthenticationFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }
 
    // Password Encoder Bean
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
 
    // Security Configuration
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {
 
        http
            .cors(cors -> {})
            .csrf(csrf -> csrf.disable())
 
            .sessionManagement(session ->
                session.sessionCreationPolicy(
                    SessionCreationPolicy.STATELESS))
 
            .authorizeHttpRequests(auth -> auth
                    // Public APIs
            		
            		.requestMatchers("/admin/ **").hasAuthority("ADMIN")
            		.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                    .requestMatchers("/auth/**").permitAll()
                    .requestMatchers(HttpMethod.POST,"/users").permitAll()
                    
                    .requestMatchers(HttpMethod.GET,"/answers/**")
                    .hasAnyAuthority("USER","ADMIN")
                    
                    // Admin Only APIs
                    .requestMatchers(HttpMethod.GET, "/users/**")
                    .hasAuthority("ADMIN")
 
                    .requestMatchers(HttpMethod.DELETE, "/users/**")
                    .hasAuthority("ADMIN")
 
                    // USER and ADMIN access
                    .requestMatchers("/questions/**")
                    .hasAnyAuthority("USER", "ADMIN")
                    
 
                  // .requestMatchers("/answers/**").permitAll()
                    //.hasAnyAuthority("USER", "ADMIN")
 
                    .requestMatchers("/notifications/**")
                    .hasAnyAuthority("USER", "ADMIN")
 
                    .requestMatchers("/chatrooms/**")
                    .hasAnyAuthority("USER", "ADMIN")
 
                    .requestMatchers("/messages/**")
                    .hasAnyAuthority("USER", "ADMIN")
 
                    // Protected APIs
                    .anyRequest().authenticated())
 
            .addFilterBefore(
                    jwtFilter,
                    UsernamePasswordAuthenticationFilter.class);
 
        return http.build();
    }

}
