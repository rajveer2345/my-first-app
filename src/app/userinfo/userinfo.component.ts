import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {

  userres: any;
  updatedData:any={};
  userData:any;
  UserListData:any[] = []
  id: any;
  title: any;
 
  constructor(private http: HttpClient, private authservice: AuthService, private router: Router) {
    this.fetchData()
  }
  updateStatus( roleStatus: any, id:any) {

    console.log("updating status")
    
    if(roleStatus == "resolved")
    {roleStatus="pending";}
    else if(roleStatus == "pending")
    {roleStatus="resolved";}
    //console.log(this.status)
    this.authservice.updateStatus(roleStatus, id)
      .subscribe((response: any) => {
  
        console.log(response," Current role:",roleStatus)
  
        this.fetchData();
        // Handle the response (e.g., display a success message or error)
      });
  
  }

  
fetchData() {

this.http.get('http://localhost:4000/user/getall').subscribe(
  (data) => {

    console.log('API Response:', data);
    
    this.UserListData= data as any[];
  },
  (error) => {
   
    console.error('API Error:', error);
  }
);
}
}

