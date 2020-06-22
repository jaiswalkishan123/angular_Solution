import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-question',
  template: `
  <app-navbar></app-navbar>

  <app-sidenav></app-sidenav>
  

  `,
  styles: [
  ]
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
