import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersListData:any[] = []
  username:any;


  constructor(private http: HttpClient ,private authService: AuthService, private router: Router) {
  this.fetchData();
}

updateStatus( roleStatus: any, id:any) {

  console.log("updating status")
  if(roleStatus == "resolved"){roleStatus="pending";}else if(roleStatus == "pending"){roleStatus="resolved";}
  //console.log(this.status)
  this.authService.updateStatus(roleStatus, id)
    .subscribe((response: any) => {

      console.log(response," Current role:",roleStatus)

      this.fetchData();
      // Handle the response (e.g., display a success message or error)
    });

}
// toggleStatus(post: any) {
//   // Toggle the status
//   if (post.status === 'resolved') {
//     post.status = 'pending';
//     this.status = post.status
//   } else {
//     post.status = 'resolved';
//     this.status = post.status

//   }
// }

  
 fetchData() {

  console.log("running fetch data")
  this.http.get('http://localhost:4000/users/getall').subscribe(
    (data) => {
  
      //console.log('API Response:', data);
      
      this.usersListData = data as any[];
    },
    (error) => {
     
      console.error('API Error:', error);
    }
  );
  }
}
