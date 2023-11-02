import { Injectable } from '@angular/core';

interface User {
  emailid: string,
  username: string,
  password: string,
  favList: any[]
}
@Injectable({
  providedIn: 'root'
})

export class UserService {
  currentUser: User | null = null;
  constructor() { }
  addUser(user: any) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log("user", user);
    const isUserPresent = users.find((u: User) => (u.username === user.username || u.emailid === user.emailid));

    if (isUserPresent) {
      console.log(isUserPresent);
      alert("username or emailid already exist");
    }
    else {
      const newUser: User = { emailid: user.emailid, username: user.username, password: user.password, favList: [] };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
  isValid(user: any) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log("user", user);
    const validUser = users.find((u: User) => (u.username === user.username && u.password === user.password));
    if (validUser) {
      this.currentUser = validUser;
      localStorage.setItem('user', JSON.stringify(validUser));
    }
    return (validUser) ? true : false;
  }
  // logout() {
  //   //find user from users in localstorage and update their favlist
  //   // then remove user 
  //   localStorage.removeItem('user');
  //   this.currentUser = null;
  // }
  logout() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUserIndex = users.findIndex((u: User) => u.username === this.currentUser?.username);
    if (currentUserIndex !== -1) {
      users[currentUserIndex].favList = this.currentUser?.favList || [];
      localStorage.setItem('users', JSON.stringify(users));
    }
    localStorage.removeItem('user');
    this.currentUser = null;
  }
}
