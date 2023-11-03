import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggeduser: { role: string } = { role: '' };
  showEnquiry: boolean = false;

  constructor() {}

  ngOnInit() {
    this.setLoggedUserRole();
  }

  setLoggedUserRole() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      this.loggeduser.role = userData.role || '';
      this.showEnquiry = this.loggeduser.role === 'admin';



    }
  }

  logout() {
    localStorage.clear();
  }
}
