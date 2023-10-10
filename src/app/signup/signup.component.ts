import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  Data = { username: '', email: '', password: '' };
  userData: any[] = [];

  constructor(private authservice: AuthService, private router: Router){}
  onSubmit(){
    this.authservice.signupCheck(this.Data).subscribe((res:any)=>{
      this.userData = res || [];
      console.log(this.userData["message"]);
      console.log(this.userData["data"]);
      if (this.userData["message"] == "user added successfully") {
  
        this.router.navigate(['/login']);
     
      }
  })
}
}
