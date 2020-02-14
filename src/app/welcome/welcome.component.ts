import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = "Welcome Route Message Check"
  name = ''
  welcomeMessageService:string=''
  //ActivatedRoute
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) {


  }

  ngOnInit() {

    this.name = this.route.snapshot.params['name'];

    //  console.log(this.message);
    //console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)

    );
    console.log("last line of get welcome message")
  }

  getWelcomeMessageWithParameter(name) {
   // console.log(this.service.executeHelloWorldBeanServiceWithPathVariable(this.name));
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)

    );
    console.log("last line of get welcome message")
  }
  handleSuccessfulResponse(response) {
    console.log(response);
    this.welcomeMessageService= response.message;
  }

  handleErrorResponse(error){
    console.log(error.error.message);
this.welcomeMessageService=error.error.message

  }
}