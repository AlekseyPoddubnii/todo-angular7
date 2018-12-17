import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  todoId: number;
  filter: string
  constructor() { }

  ngOnInit() {
    this.todoId = 4;
    this.todoTitle = '';
    this.filter = 'All';
    this.todos = [
      {
        'id': 1,
        'title': 'Finish This todos',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'Start This todos',
        'completed': false,
        'editing': false
      },
      {
        'id': 3,
        'title': 'Write test on jest framework for MoC',
        'completed': false,
        'editing': false
      },
    ];
  };

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return
    };

    this.todos.push({
      id: this.todoId,
      title: this.todoTitle,
      completed: false,
      editing: false
    })

    this.todoTitle = '';
    this.todoId++;

  };

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  };

  editTodo(todo: Todo) {
    todo.editing = true;
  };

  editDone(todo: Todo) {
    todo.editing = false;
  };

  counter(): any {
    if (this.todos.filter(todo => !todo.completed).length === 0) {
      return 'All task\'s done. Please clear yout stack..'
    }
    return this.todos.filter(todo => !todo.completed).length;
  };

  haveCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  };

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  };

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed)
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed)
    }
    return this.todos;
  };

}

interface Todo {
  id: number,
  title: string,
  completed: boolean,
  editing: boolean
}
