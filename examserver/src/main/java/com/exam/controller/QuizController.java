package com.exam.controller;

import com.exam.model.exam.Category;
import com.exam.model.exam.Quiz;
import com.exam.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@RequestMapping("/quiz")
@CrossOrigin("*")
@RestController
public class QuizController {
@Autowired
    private QuizService quizService;

//add quiz service
    @PostMapping("/")
    public ResponseEntity<Quiz> add(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //update quiz
    @PutMapping("/")
    public ResponseEntity<?> update(@RequestBody Quiz quiz)
    {
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    @GetMapping("/{quizId}")
    public Quiz getQuiz(@PathVariable("quizId") Long quizId)
    {
        return this.quizService.getQuiz(quizId);
    }

    @GetMapping("/")
    public LinkedHashSet<?>getQuizzes(){
        return new LinkedHashSet<>(this.quizService.getQuizzes());
    }

    @DeleteMapping("/{qid}")
    public void Delete(@PathVariable("qid") long qid)
    {
        this.quizService.deleteQuiz(qid);
    }

    @GetMapping("/category/{cid}")
    public ResponseEntity<?>getQuizzesOfCategory(@PathVariable("cid") Long cid){
        Category category=new Category();
        category.setCid(cid);
        List<Quiz> quizzes=this.quizService.getQuizzesOfCategory(category);
        return new ResponseEntity<List<Quiz>>(quizzes, HttpStatus.OK);
    }
}
