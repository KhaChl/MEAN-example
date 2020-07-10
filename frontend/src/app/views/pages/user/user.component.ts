import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  /* Aux para cerrar modal */
  @ViewChild('closeButtonDeleteUser') closeButtonDeleteUser;
  
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.userService.deleteUser()
      .subscribe(
        res => {
          this.closeButtonDeleteUser.nativeElement.click();
          this.authService.logout()
        },
        e => {
          console.log(e);
        }
      );
  }

}
