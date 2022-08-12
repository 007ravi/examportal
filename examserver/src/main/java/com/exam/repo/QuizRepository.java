package com.exam.repo;

import com.exam.model.exam.Category;
import com.exam.model.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

//in repo we need to extend jpa repository and give model and type of primary id in that model (we will have all the function to access db)
public interface QuizRepository extends JpaRepository<Quiz,Long> {
    public List<Quiz> findBycategory(Category category);
}
