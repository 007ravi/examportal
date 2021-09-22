package com.exam.service;

import com.exam.model.User;
import com.exam.model.UserRole;

import java.util.List;
import java.util.Set;

public interface UserService {

    //creating user
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;
    //get username
    public User getUser(String username);
    //delete by username
    public User deleteUser(long userId);
    //update user using username
    public User updateUser(User user);
    //get all user
    public List<User> getAllUser();
}
