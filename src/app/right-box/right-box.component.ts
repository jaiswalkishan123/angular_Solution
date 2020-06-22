import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-right-box',
  template: `
  <!DOCTYPE html>
<html>
<head>
<style>
table {
font-family: arial, sans-serif;
border-collapse: collapse;
width: 25%;
background-color:#ffbd69;
position:relative;
left:70%;
top:1%;
}

td, th {
border: 1px solid #dddddd;
text-align:left;
padding: 8px;
text-decoration:none;
}
a {
text-decoration:none;
color:grey;

tr:nth-child(even) {
background-color: #fbd46d;
}
</style>
</head>
<body>
<table>
<tr>
  <th style="border-radius:20%;"> The Overflow blog </th>

</tr>
<tr>
  <td><a href="#">The Overflow #26: The next right thing</a></td>

</tr>
<tr>
  <td ><a href="#">Navigation or forgetfulness? On finding purple links in your search</a></td>

</tr>
<tr>
  <th>Featured on Meta</th>

</tr>
<tr>
  <td><a href="#">
We're switching to CommonMark</a></td>

</tr>
<tr>
  <td><a href="#">New post lock available on meta sites: Policy Lock</a></td>

</tr>
<tr>
  <td><a href="#">
Feature test: Thank you reaction </a></td>

</tr>
 <tr>
  <td><a href="#">

What can we do to encourage downvoting?</a></td>

</tr>
</table>

</body>
</html>

  `,
  styles: [
  ]
})
export class RightBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
