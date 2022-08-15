import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  quizId:any;
  questions:any;
  marksGot=0;
  correctAnswers=0;
  attempted=0;
  isSubmit=false;
  timer:number=100;
  constructor(private  locationst:LocationStrategy,
    private _route:ActivatedRoute,
    private _questionService:QuestionService
    ) { }

  ngOnInit(): void {
    this.preventBackButton();
  this.quizId=this._route.snapshot.params.qid;
  this.loadQuestions();
  }


  preventBackButton(){
    history.pushState(null,"",location.href);
    this.locationst.onPopState(()=>{
      history.pushState(null,"",location.href);
    })
  }

  loadQuestions(){
    this._questionService.getQuestionOfQuizForTest(this.quizId).subscribe(
      (data)=>{
        this.questions=data;
        this.questions.forEach((q:any) => {
          q['givenAnswer']='';
          console.log(this.questions);
        });
        this.timer=this.questions.length * 0.25 * 60;
        this.startTimer();
      },
      (err)=>{
        Swal.fire("Error!","Error in loading questions of quiz",'error');
      }
    )
  }

  submitQuiz(){

    if(this.timer==0){
     this.calculateResult();
    }
    else{
    Swal.fire({
      title:'Do you want to submit the quiz?',
      showCancelButton:true,
      confirmButtonText:'Submit',
      icon:'info',
      denyButtonText:''
    }).then((e)=>{
      if(e.isConfirmed){
        this.calculateResult();
      }

    })
  }
  }

  calculateResult(){
    
    this.isSubmit=true;
    this.questions.forEach((q:any) => {
      if(q.givenAnswer==q.answer){
        this.correctAnswers++;
       let marksSingle= this.questions[0].quiz.maxMarks/this.questions.length;
       this.marksGot+=marksSingle;
   //    console.log(this.questions);
      }
      if(q.givenAnswer.trim()!=''){
        this.attempted++;
      }

    });
  }

  startTimer(){
  let t=  window.setInterval(()=>{
      if(this.timer<=0){
        this.submitQuiz();
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    },1000)
  }

  formattedTimer(){
    let min=Math.floor(this.timer/60);
    let sec=this.timer%60;
    return min+'min :'+sec+'sec';
  }
}
