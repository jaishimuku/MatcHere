import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter(); // child to parent, EventEmitter from @angular/core
  model: any = {}; // specify empty obj

  constructor(private authSeervice: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authSeervice.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, err => {
      console.log(err);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
