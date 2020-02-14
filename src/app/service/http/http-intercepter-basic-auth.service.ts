import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//this intercepts the request, adds the authorization header, and sending it to the next HttpHandler. Add it to the app.module.ts
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }


  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let username = 'davidiumprime'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


    request = request.clone({

      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(request);
  }
}
