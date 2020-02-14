import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Response } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public completion: boolean,
    public date: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string
  // new Todo(1, 'Learn to Code even better.', false, new Date()),
  // new Todo(2, 'Become an Angular Pro.', false, new Date()),
  // new Todo(3, 'Master Problem Solving', false, new Date())
  // {
  //   id: 1,
  //   description: 
  // },
  // {
  //   id: 2,
  //   description: 'Get a Lawyer.'
  // },
  // {
  //   id: 3,
  //   description: 'Master Problem Solving.'
  // }


  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  deleteTodo(id) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('davidiumprime', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful.`
        this.refreshTodos()
      }

    )

  }


  updateTodo(id) {
    console.log(`update todo ${id}`)

    this.router.navigate(['todos', id])
    
  }

  addTodo() {

    this.router.navigate(['todos', -1])
    
  }

  ngOnInit() {
    this.refreshTodos()

  }

  
  refreshTodos() {
    this.todoService.retrieveAllTodos('davidiumprime').subscribe(

      response => {
        console.log(response);
        this.todos = response;
      }
    )

  }




}
