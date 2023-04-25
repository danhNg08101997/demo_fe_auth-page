import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { LoginUserService } from '../service/login-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  user: User = new User();

  constructor(private loginUserService: LoginUserService) {}

  ngOnInit(): void {}

  userLogin(f: NgForm) {
    this.loginUserService.loginUser(this.user).subscribe(res=>{
      if(res){
                alert('Login Successfully');
      } else{
            alert('Error')

      }
    })
    // this.loginUserService.loginUser(this.user).subscribe(
    //   (data) => {
    //     alert('Login Successfully');
    //   },
    //   (error) => alert('Error')
    // );
  }

}
