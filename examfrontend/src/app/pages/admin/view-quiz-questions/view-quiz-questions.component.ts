import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;
  questions:any;
  constructor(private _route:ActivatedRoute,private _question:QuestionService) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params.qid;//variable given in router module
    this.qTitle=this._route.snapshot.params.title;
    this._question.getQuestionOfQuiz(this.qId).subscribe((data)=>{
      this.questions=data;
      console.log(data);
    },
    (err)=>{
      console.log(err);
    })
  }


}
