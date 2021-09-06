import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FbsService } from '../services/fbs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  myData=[];
  countryList=[
    {"countryname":"India"},
    {"countryname":"USA"}, 
    {"countryname":"England"}, 
  ];
  constructor(private _fbs:FbsService) { }

  ngOnInit(): void {
    this.userForm= new FormGroup({
      'firstname': new FormControl(null,Validators.required ),
      'lastname': new FormControl(null),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('female'),
      'isMarried': new FormControl(null),
      'address':new FormGroup({
      'country': new FormControl(null),
       'city': new FormControl(null),
      'street': new FormControl(null)
      }),
    });
  }
  onSave(){
    this._fbs.savedata(this.myData)
    .subscribe(sub=>{
      console.log(sub); 
    },
 error=>{
    console.log(console.error);
    
 });
  }
  
}
