package com.wipro.doconnectai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.doconnectai.entity.ChatRoom;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom,Long> {

}
