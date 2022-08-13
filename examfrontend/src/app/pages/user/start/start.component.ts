import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private  locationst:LocationStrategy) { }

  ngOnInit(): void {
    this.preventBackButton();
  }


  preventBackButton(){
    history.pushState(null,"",location.href);
    this.locationst.onPopState(()=>{
      history.pushState(null,"",location.href);
    })
  }
}
