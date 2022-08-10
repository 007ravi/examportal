import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _quizService:QuizService) { }

  catid:any;
  quizData:any;
  ngOnInit(): void {
this.catid=this._route.snapshot.params.catId;
console.log(this.catid);
if(this.catid=='all')
{
  //load all quiz
  console.log('load all quiz');
  this._quizService.getQuizzes().subscribe((data:any)=>{
this.quizData=data;
console.log(this.quizData);
  },
  (err)=>{

  })

}
else{
  //load quiz of selected category
  console.log(this.catid);
}
  }

}
