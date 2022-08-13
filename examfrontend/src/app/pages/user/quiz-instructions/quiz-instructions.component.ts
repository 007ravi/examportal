import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quiz-instructions',
  templateUrl: './quiz-instructions.component.html',
  styleUrls: ['./quiz-instructions.component.css']
})
export class QuizInstructionsComponent implements OnInit {

    qId:any;
    quiz:any;
  constructor(private _route:ActivatedRoute,private _quizService:QuizService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
   this.qId= this._route.snapshot.params.qid;
    this._quizService.getSingleQuiz(this.qId).subscribe((data:any)=>{
      this.quiz=data;
    },
    (err:any)=>{
      this._snack.open("Error in loading categories from server",'',{
        duration:3000,
      });
    })
  }

}
