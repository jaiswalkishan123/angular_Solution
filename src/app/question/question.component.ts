import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  template: `
<h1 style="color:'green';">Login Successful</h1>
    <h2>Welcome to the Questions Page</h2>
    <ol>
    <tr><th>Following Are The Set Of questions!!</th>
  </tr>
  <tr>  <td>How old are you?</td></tr>
    </ol>
  `,
  styles: [
  ]
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
