import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../../class/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  content: string;

  constructor(
    private todoService: TodoService,
    // private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoService.getContent(params.id).subscribe((todo: Todo) => {
        this.content = todo.content;
      });
    });
  }

  saveAndBack(): void {
    this.route.params.subscribe((params: Params) => {
      this.todoService.update(params.id, this.content);
    });
    // this.router.navigate(['/']);
    this.location.back();
  }

}
