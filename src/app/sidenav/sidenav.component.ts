import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
  <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: "Lato", sans-serif;
}
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 100px;
  left: 0;
  border:.5px solid;
  overflow-x: hidden;
  padding-top: 20px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  color: grey;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  margin-top:100px;
  width:70%;
}
table {
font-family: arial, sans-serif;
border-collapse: collapse;
width: 18%;
background-color:#ffbd69;
position:fixed;
left:82%;
top:12%;
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
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
</head>
<body>

<div class="sidenav">
  <a href="#about">Home</a>
  <a href="#services">Public</a>
  <a href="#clients" ><i class="fas fa-globe-asia"></i>StackOverflow</a>
  <a href="#contact">tags</a>
  <a href="#contact">Users</a>
  <a href="#contact">Jobs</a>

</div>
<div class="vr" style=" border-left: 4px solid black;position:fixed;
left:140px;height:100%;"></div>

<div class="main">
<hr style="width:100%">
  <h3>-SQL to get the 5th word in each row in a database [closed]
<button class="btn btn-primary">Ask Question</button></h3>
<small>active today</small>
<hr>
<h5>Solution closed</h5>
<p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
</div>
<table>
<tr>
  <th style="border-radius:20%;"> The Overflow blog </th>

</tr>
<tr>
  <td><a href="#"><i class="fas fa-pen"></i>The Overflow #26: The next right thing</a></td>

</tr>
<tr>
  <td ><a href="#"><i class="fas fa-pen"></i>Navigation or forgetfulness? On finding purple links in your search</a></td>

</tr>
<tr>
  <th>Featured on Meta</th>

</tr>
<tr>
  <td><a href="#"><i class="fas fa-pen"></i>
We're switching to CommonMark</a></td>

</tr>
<tr>
  <td><a href="#"><i class="fas fa-pen"></i>New post lock available on meta sites: Policy Lock</a></td>

</tr>
<tr>
  <td><a href="#"><i class="fas fa-pen"></i>
Feature test: Thank you reaction </a></td>

</tr>
 <tr>
  <td><a href="#">
<i class="fas fa-pen"></i>
What can we do to encourage downvoting?</a></td>

</tr>
</table>

</body>
</html>

  `,
  styles: [
  ]
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
