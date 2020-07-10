import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  err: string;
  succes: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(
        res => {
          this.user.setValue({ email: res['email'] });
        },
        e => {
          console.log(e);
        }
      );
  }

  changeData() {
    this.userService.updateEmail(this.user.value)
      .subscribe(
        res => {
          this.succes = res['message'];
          this.err = '';
        },
        e => {
          this.succes = '';
          this.err = e.error;
        }
      );
  }

}
