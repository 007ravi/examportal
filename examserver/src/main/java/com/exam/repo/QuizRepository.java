package com.exam.repo;

import com.exam.model.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

//in repo we need to extend jpa repository and give model and type of primary id in that model (we will have all the function to access db)
public class QuizRepository extends JpaRepository<Quiz,Long> {
}
