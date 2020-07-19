import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}; // created object to store values i.e. username and password

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login(){
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log(error);
    });
  }

  loggedIn() { // if logged in shows the User Message
    const token = localStorage.getItem('token');
    return !!token; // if token is empty returns false otherwise if something then true
  }

  logout() { // removes token form local storage
    localStorage.removeItem('token');
    console.log('Logged Out');
  }
}
