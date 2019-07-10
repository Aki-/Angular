import { Component, OnInit } from '@angular/core';

//Custom user class
import { user } from "../../../user";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  userList: user[] = [];

  getData(form) {
    
    //console.log(form.value);

    var userObj: user;

    userObj = form.value;

    this.userList.push(userObj);

  }

  constructor() { }

  ngOnInit() {
  }



}
