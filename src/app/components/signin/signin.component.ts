import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/shared/service/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginForm : FormGroup | any;
  constructor(private router : Router, private fb:FormBuilder,private userService : UserService){

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control('',[Validators.required, Validators.minLength(8)]),
      password: this.fb.control('',[Validators.required, Validators.minLength(8)]),
    });
  }
  signin(){
    if (this.loginForm.valid) {
      console.log('in login.ts');
      this.userService.isValid(this.loginForm?.value);
      this.router.navigate(['/']);
    }
    else{
      alert("fill all fields");
    }
  }
}
