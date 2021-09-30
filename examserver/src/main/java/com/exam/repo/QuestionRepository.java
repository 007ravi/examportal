package com.exam.repo;

import com.exam.model.exam.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public class QuestionRepository extends JpaRepository<Question,Long> {
}
