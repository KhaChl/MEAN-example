import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    role: new FormControl('User'),
  });
  
  err: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.authService.signUp(this.user.value)
      .subscribe(
        res => {
          localStorage.setItem('token', res['token']);
        },
        e => {
          this.err = e.error;
        }
      );
  }

}
