package com.exam.controller;


import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    //creating user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        user.setProfile("default.png");

        //encoding password with brcyptpasswordencoder
        user.setPassword(this.bCryptPasswordEncoder.encode((user.getPassword())));

        Set<UserRole> roles=new HashSet<>();
        Role role=new Role();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");

        UserRole userRole=new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        roles.add(userRole);
     return this.userService.createUser(user,roles);
    }

    @GetMapping("/{username}")
     public User getUser(@PathVariable("username") String username)
    {
       return this.userService.getUser(username);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUser()
    {
        return this.userService.getAllUser();
    }

    //delete user
    @DeleteMapping("/{userId}")
    public ResponseEntity<User> deleteUser(@PathVariable("userId") long userId)
    {
        this.userService.deleteUser(userId);
       return new ResponseEntity("userDeleted with id"+userId,HttpStatus.OK);
    }

    @PutMapping("/")
    public User updateUser(@RequestBody User user) throws Exception{
        return this.userService.updateUser(user);
    }



}
