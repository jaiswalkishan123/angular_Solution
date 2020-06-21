import { Component } from '@angular/core';
import { User } from './user';
import { ValidationService } from './validation.service';
import { Router,Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  userModel=new User('','');
  submitted=false;

  constructor(private _validationService:ValidationService,
  private router:Router ) {}
  onSubmit()  {
this.submitted=true;
    this._validationService.login(this.userModel)
    .subscribe(
      data=>{
        const email=data.email;
        const password=data.password;
        if(email=="test@gmail.com" && password=="test") {
          this.router.navigate(['/question']);
        }
      else {
        this.router.navigate(['/error']);
      }
      },

    )
  }
}
