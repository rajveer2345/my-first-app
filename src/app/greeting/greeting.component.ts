import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  user: any;
  constructor(private authservice: AuthService){
    this.user=JSON.parse(localStorage.getItem('user'));
  }
}
