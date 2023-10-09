import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userData: any[] = [];

  constructor(private authservice: AuthService){
    this.authservice.getAllUser().subscribe((res:any)=>{
      console.log("data4545",res);
      this.userData = res || []
    })
    this.authservice.getUserById(123).subscribe((res:any)=>{
      console.log("data4545",res);
      this.userData = res || []
    })
    this.authservice.createUser({
      name:"abc",
      email:"abc@gp/cpom",
      password:123
    }).subscribe((res:any)=>{
      console.log("data4545",res);
      this.userData = res || []
    })

  }
}
