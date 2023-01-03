import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";
  formData!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
    });
  }


  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log("userName: " + this.userName);
    console.log("password: " + this.password);

    this.authService.login(this.userName, this.password).subscribe(data => {
      console.log("Login Success: " + data);

      if (data) this.router.navigate(['/home']);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

}
