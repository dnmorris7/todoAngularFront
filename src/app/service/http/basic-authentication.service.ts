import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatorUser')
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
  }



  logout() {
    sessionStorage.removeItem('authenticaterUser')

  }

  

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth/`, { headers }).pipe(

      map(
        data => {
          sessionStorage.setItem('authenticaterUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }

      )

    )
    // console.log("Execute Hello World Bean Service")

  }

  executeJWTAuthenticationService(username, password) {
    return this.http.post<any>(
      `${API_URL}/authenticate`, { username, password }).pipe(

      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }

      )

    )
    // console.log("Execute Hello World Bean Service")

  }




  // authenticate(username, password) {
  //   //console.log('before ' + this.isUserLoggedIn());

  //   if (username === "davidiumprime" && password === 'dummy') {
  //     sessionStorage.setItem('authenticaterUser', username)
  //     //  console.log('after '  + this.isUserLoggedIn());
  //     return true;
  //   }
  //   return false;
  // }

}
export class AuthenticationBean {
  constructor(public messsage: string) {

  }
}