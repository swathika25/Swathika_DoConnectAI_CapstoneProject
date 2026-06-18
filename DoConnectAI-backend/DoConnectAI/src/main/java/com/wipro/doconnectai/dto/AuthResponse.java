package com.wipro.doconnectai.dto;

public class AuthResponse {
	
	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	private String token;
    private String role;
    private String name;
    private Long userId;
 
    public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public AuthResponse() {
    }
 
    public AuthResponse(String token, String role, String name, Long userId) {
        this.token = token;
        this.role = role;
        this.name=name;
        this.userId=userId;
    }
 
    

}
