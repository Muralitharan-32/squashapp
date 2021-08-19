import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
  emailForm = new FormGroup({
    number1: new FormControl('', Validators.required),
    number2: new FormControl('', Validators.required),
    number3: new FormControl('', Validators.required),
    number4: new FormControl('', Validators.required),
    number5: new FormControl('', Validators.required)
    })
    otp="";
    @Output() myOutput: EventEmitter<Number>= new EventEmitter
  constructor() { }

  ngOnInit() {
    console.log("enter into opt")
    console.log(localStorage.getItem("emailForm"))
  }
 finish() {
    console.log(this.emailForm.value)
    localStorage.setItem("emailForm", this.otp)
     this.myOutput.emit(4)
  }
  back() {
    console.log("Back")

    this.myOutput.emit(2)
  }
 inputChange(value,id){
 if(value.length === 1){
   this.otp=this.otp+value;
   document.getElementById(id).focus()
 }

 }
  
}

