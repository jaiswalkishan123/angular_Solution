import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <h1 style="color:'red';">
      Incorrect Credentials
    </h1>
  `,
  styles: [
  ]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
