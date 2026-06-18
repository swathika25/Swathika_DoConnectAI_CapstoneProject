package com.wipro.doconnectai.entity;

import jakarta.persistence.GenerationType;
import jakarta.validation.constraints.*;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
	
	//Primary Key
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	//user full name
	//validation : user name can not be null
	@NotBlank(message="Name is required")
	private String name;
	
	//user email for login
	//validation : user email cannot be null 
	@NotBlank(message="Email is required")
	private String email;
	
	//user password for login
	//validation : user password cannot be null and, length must be between 6 and 15 characters
	@NotBlank(message="Password is required")
	@Size(min = 6, max=100, message="password must be in between 6 to 15 characters")
	private String password;
	
	
	//roles("USER", "ADMIN")
	// validation:Allowed roles are USER or ADMIN
	@Pattern(regexp ="USER|ADMIN",message="Role must be either USER or ADMIN")
	@NotBlank(message="Role is required")
	private String role;

	// one user can post many questions
	@OneToMany(mappedBy = "user")
	private List<Question> questions;
	
	//one user can post many answers
	@OneToMany(mappedBy = "user")
	private List<Answer> answers;
	
	// one user can send many messages
	@OneToMany(mappedBy = "sender")
	private List<Message> messages;

	
	//one user can receive many notification
	@OneToMany(mappedBy="user")
	private List<Notification> notifications;
	
	public User() {
		super();
	}


	public User(Long userId, String name, String email, String password, String role) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
	}


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}

	
	
}
