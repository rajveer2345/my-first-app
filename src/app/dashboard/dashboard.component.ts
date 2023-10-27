import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any; // Define a variable to store the user data
  userRole: string | undefined; // Define a separate variable for user role
 
  constructor() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      this.userRole = this.user.role;
    }
  }
  
  logout(){
    localStorage.clear()
    
  }

}
