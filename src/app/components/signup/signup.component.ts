import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/shared/service/user/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm : FormGroup | any;
  constructor(private router : Router, private fb:FormBuilder,private userService : UserService){

  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      emailid: this.fb.control('',[Validators.required, Validators.email]),
      username: this.fb.control('',[Validators.required, Validators.minLength(8)]),
      password: this.fb.control('',[Validators.required, Validators.minLength(8)]),
    });
  }
  signup(){
    if (this.registerForm.valid) {
      console.log("hi");
      this.userService.addUser(this.registerForm?.value);
      this.router.navigate(['/signin']);
    }
    else{
      alert("fill all fields");
    }
  }
}
