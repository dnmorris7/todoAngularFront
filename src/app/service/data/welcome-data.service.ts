import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8020/hello-world-bean')
    // console.log("Execute Hello World Bean Service")

  }


  executeHelloWorldBeanServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders(
    //   {
    //     Authorization:basicAuthHeaderString
    //   }
    // )
    return this.http.get<HelloWorldBean>(`http://localhost:8020/hello-world/variable/${name}`, 
    //{headers}
    );
    // console.log("Execute Hello World Bean Service")

  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'davidiumprime'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

  //  Access to XMLHttpRequest at 'http://localhost:8020/hello-world/variable/davidiumprime' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.


  //Access to XMLHttpRequest at 'http://localhost:8020/hello-world/variable/davidiumprime' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
}
