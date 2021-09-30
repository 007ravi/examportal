package com.exam.repo;

import com.exam.model.exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;

//in repo we need to extend jpa repository and give model and type of primary id in that model (we will have all the function to access db)
public class CategoryRepository extends JpaRepository<Category,Long> {

}
