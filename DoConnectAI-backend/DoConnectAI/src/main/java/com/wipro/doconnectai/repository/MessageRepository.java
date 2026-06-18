package com.wipro.doconnectai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.doconnectai.entity.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {

}
