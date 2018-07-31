import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoText: string;

  todoTexts: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todoTexts.push(this.todoText);
    this.todoText = '';
  }

  clearTodos() {
    this.todoTexts.length = 0;
  }
}
