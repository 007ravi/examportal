package com.exam.controller;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.service.QuestionService;
import com.exam.service.QuizService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {
    @Autowired//means the object of questionimpl will be created
    QuestionService questionService;

    @Autowired
    QuizService quizService;//second method to get question of quiz;

    @GetMapping("/quiz/{quizId}")
    public ResponseEntity<?> getQuestionofQuiz(@PathVariable("quizId") long quizId){

        //first method to do this
        /*     Quiz quiz=new Quiz();
        quiz.setqId(quizId);
        Set<Question>questionsOfQuiz= this.questionService.getQuestionsOfQuiz(quiz);
        return ResponseEntity.ok(questionsOfQuiz);*/

        Quiz quiz=this.quizService.getQuiz(quizId);
       Set<Question>questions= quiz.getQuestions();
       List list=new ArrayList(questions);
       if(list.size()>Integer.parseInt(quiz.getNumberofQues())){
           //true means you have more question count that you have to send
           list=list.subList(0,Integer.parseInt(quiz.getNumberofQues()+1));

       }
        Collections.shuffle(list);
       return ResponseEntity.ok(list);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllQuestion(){
        return ResponseEntity.ok(this.questionService.getQuestions());
    }

    @PostMapping("/")
    public Question addQuestion(@RequestBody Question question){
        return this.questionService.addQuestion(question);
    }

    @PutMapping("/")
    public ResponseEntity<Question> updateQuiz(@RequestBody Question question)
    {
        return ResponseEntity.ok(this.questionService.updateQuestion(question));

    }

    @DeleteMapping("/{quesId}")
    public ResponseEntity<?> DeleteQuestion(@PathVariable("quesId") long quesId)
    {
       return ResponseEntity.ok(this.questionService.delete(quesId));
    }

    //get single question
    @GetMapping("/{quesId}")
    public ResponseEntity<?> get(@PathVariable("quesId") long quesId)
    {
        return ResponseEntity.ok(this.questionService.getQuestion(quesId));
    }
}
