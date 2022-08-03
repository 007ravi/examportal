import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public getQuizzes(){
    return this._http.get(`${baseUrl}/quiz/`);
  }

  public addQuiz(quizData:any){
    return this._http.post(`${baseUrl}/quiz/`,quizData);
  }

  public deleteQuiz(qid:any){
return this._http.delete(`${baseUrl}/quiz/`+qid);
  }
}
