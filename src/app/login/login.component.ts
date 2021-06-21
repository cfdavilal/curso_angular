import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('email') email: ElementRef
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {

  }
  login(form: NgForm) {
    const email = form.value.email;
    const password: string = form.value.password;
    this.loginService.login(this.email.nativeElement.value, password)
  }
}
