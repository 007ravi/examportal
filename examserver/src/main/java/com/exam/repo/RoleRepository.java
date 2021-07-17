package com.exam.repo;

import com.exam.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

//two parameter one is the enitity and other is type of primary key or id <entity,@id type>
public interface RoleRepository extends JpaRepository<Role,Long> {

}
