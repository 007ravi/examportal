import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
quizzes=[
  {
    qId:23,
    title:'Basic java Question',
    description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications. Thus, core Java is the part of Java SE where the developers develop desktop-based applications by using the basic concepts of Java where JDK (Java Development Kit) is a quite familiar Java SE implementation.',
    maxMarks: '50',
  numberofQues: '10',
  active: true,
  category:{
    title:'programming'
  }
  },
  {
    qId:23,
    title:'Basic java Question',
    description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications. Thus, core Java is the part of Java SE where the developers develop desktop-based applications by using the basic concepts of Java where JDK (Java Development Kit) is a quite familiar Java SE implementation.',
    maxMarks: '50',
  numberofQues: '10',
  active: true,
  category:{
    title:'programming'
  }
  },
  {
    qId:23,
    title:'Basic java Question',
    description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications. Thus, core Java is the part of Java SE where the developers develop desktop-based applications by using the basic concepts of Java where JDK (Java Development Kit) is a quite familiar Java SE implementation.',
    maxMarks: '50',
  numberofQues: '10',
  active: true,
  category:{
    title:'programming'
  }
  },
  {
    qId:23,
    title:'Basic java Question',
    description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications. Thus, core Java is the part of Java SE where the developers develop desktop-based applications by using the basic concepts of Java where JDK (Java Development Kit) is a quite familiar Java SE implementation.',
    maxMarks: '50',
  numberofQues: '10',
  active: true,
  category:{
    title:'programming'
  }
  }
]
  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {
    this._quiz.getQuizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        Swal.fire("Error!!","Error in loading Quizzes",'error');
      }
    )
  }

}
