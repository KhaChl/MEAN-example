import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user = new FormGroup({
    currentPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required])
  });

  err: string;
  succes: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  changePassword() {
    this.userService.updatePassword(this.user.value)
      .subscribe(
        res => {
          localStorage.setItem('token',res['token']);
          this.err = '';
          this.succes = res['message'];
        },
        e => {
          this.err = e.error;
          this.succes = '';
        }
      );
  }

}
