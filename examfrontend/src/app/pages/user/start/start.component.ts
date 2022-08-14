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
      },
      (err)=>{
        Swal.fire("Error!","Error in loading questions of quiz",'error');
      }
    )
  }
}
