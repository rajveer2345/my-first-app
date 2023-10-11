import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = { email: '', password: '' };
  userData: any;

  constructor(private authservice: AuthService, private router: Router){}


  onSubmit() {
     //console.log(this.formData.password);
     this.authservice.loginCheck(this.formData).subscribe((res:any)=>{
    this.userData = res || {};
      if (this.userData["message"] == "success") {
  
        localStorage.setItem('user',JSON.stringify(this.userData?.data));
        //console.log(localStorage.getItem('user'));

        this.router.navigate(['/dashboard']);
       
      }
    })
  
  }

}
