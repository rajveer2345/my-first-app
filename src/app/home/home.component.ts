import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  blogRes: any;
  updatedData:any={};
  userData:any;
  blogListData:any;
  id: any='651ffbe565d01d087be5854e';
  constructor(private http: HttpClient, private authservice: AuthService, private router: Router){
    localStorage.clear();
    this.fetchData();
   

  }

  ngOnInit() {
    this.fetchData();
  }
  
  fetchData() {
  
  this.http.get('http://localhost:4000/blog/getall').subscribe(
    (data) => {
  
      console.log('API Response:', data);
      
      this.blogListData = data;
    },
    (error) => {
     
      console.error('API Error:', error);
    }
  );
  }
}

