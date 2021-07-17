package com.exam.repo;

import com.exam.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


//cant create object of interface in java but the object of class which implement the interface can be created
public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsername(String username);
}
