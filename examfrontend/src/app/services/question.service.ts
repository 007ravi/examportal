import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { 

  }

  public getQuestionOfQuiz(qId:any){
return this._http.get(`${baseUrl}/question/quiz/all/${qId}`)
  }

  public addQuestion(question:any){
    return this._http.post(`${baseUrl}/question/`,question);
  }

  public deleteQuestion(qId:any){
    return this._http.delete(`${baseUrl}/question/${qId}`)
  }

  public getQuestionOfQuizForTest(qId:any){
    return this._http.get(`${baseUrl}/question/quiz/${qId}`);
      }
}
