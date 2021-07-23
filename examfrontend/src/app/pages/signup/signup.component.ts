import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }
public user={
username:'',
password:'',
firstName:'',
lastName:'',
email:'',
phone:'',
}
  ngOnInit(): void {
  }
  formSubmit(){
    if(this.user.username=='' || this.user.username==null){
      this.snack.open('Please Enter username!!','X',{
        duration:2500,
        // verticalPosition:'top',
        // horizontalPosition:'right'
      })
      return;
    }

    console.log(this.user.username);
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
       console.log(data);
       this.snack.open('Registration Successfull','X',{
        duration:2500,})
      },
      (error:any)=>{
  console.log(error);
  this.snack.open('Something went wrong!!!','X',{
    duration:2500,})
  
      }
    )
  }

}
