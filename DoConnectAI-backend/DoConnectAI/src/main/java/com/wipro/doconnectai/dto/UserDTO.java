package com.wipro.doconnectai.dto;

public class UserDTO {
	
	//Primary Key
		private Long userId;
		
		//user full name
		private String name;
		
		//user email for login
		private String email;
		
		//user password for login
		private String password;
		
		
		//roles("USER", "ADMIN")
		private String role;


		public UserDTO() {
			super();
		}


		public UserDTO(Long userId, String name, String email, String password, String role) {
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
