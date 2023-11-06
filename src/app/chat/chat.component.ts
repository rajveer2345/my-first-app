import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  searchUser: string = '';
userData:any;
userListData:any = {};
defaultUserListData:any[] =[];
email: string ;
username: string ;

showChatbox: boolean = false;

messages: string[] = [];
message: string = '';
socket: any;

  
ngOnInit() {

}

constructor(private http: HttpClient, private authservice: AuthService, private router: Router){
  // this.fetchData();
}


searchh() {
  if(!this.searchUser){
    this.userListData = this.defaultUserListData || [];
    return
  }
  this.authservice.getByEmail(this.searchUser).subscribe((res:any)=>{
    this.userData = res || {};
   
    this.userListData =  this.userData?.data
    console.log(this.userListData);
      
    })
}
  

// fetchData() {

//   this.http.get('http://localhost:4000/user/getall').subscribe(
//     (data) => {
  
//       console.log('API Response:', data);
      
//       this.userListData = data as any[];
//       this.defaultUserListData = data as any[];
//       console.log(this.userListData);
//     },
//     (error) => {
     
//       console.error('API Error:', error);
//     }
//   );
//   }
}