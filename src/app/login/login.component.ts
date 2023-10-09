import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(){}

  formData = { username: '', password: '' };

  onSubmit() {
     console.log(this.formData.password);
  }

}
