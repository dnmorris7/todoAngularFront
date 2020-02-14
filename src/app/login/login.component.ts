import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'davidiumprime'
  password = 'dummy'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Dependency Injection
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService, private basicAuthenticationService: BasicAuthenticationService) {

  }

  ngOnInit() {
  }

  handleLogin() {

    // if (this.username === "davidiumprime" && this.password === 'dummy') {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else { this.invalidLogin = true }


    console.log(this.username);
    console.log(this.password);
  }

  handleBasicAuthLogin() {

    // if (this.username === "davidiumprime" && this.password === 'dummy') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )


   // console.log(this.username);
   // console.log(this.password);
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }


}
