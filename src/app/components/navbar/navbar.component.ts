import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtService } from 'src/shared/service/art/art.service';
import { UserService } from 'src/shared/service/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private router : Router,public userService : UserService){

  }
  logout(){
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
