import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = { email: '', password: '', status: 'false' };
  userData: any;
  userStatus: any;
  username:any;
  constructor(private authservice: AuthService, private router: Router) { }
//

//   onSubmit() {
//     //console.log(this.formData.password);
//     this.authservice.loginCheck(this.formData).subscribe((res: any) => {
//       this.userData = res || {};
//       console.log(this.userData);

//       if (this.userData.message == "success") {
//         if (this.userData.data.status === 'resolved') {

//           localStorage.setItem('user', JSON.stringify(this.userData?.data));
//           localStorage.setItem('token', this.userData?.token);
//           //console.log(localStorage.getItem('user'));

//           this.router.navigate(['/dashboard']);

//         }

//         else {
//           console.log("error")
//         }
//       })

//   }

// }

onSubmit() {
  this.authservice.loginCheck(this.formData).subscribe((res: any) => {
    this.userData = res || {};

    if (this.userData.message === "success") { 
      if (this.userData.data.status === 'resolved'  || this.userData.data.role === 'admin') {
        // User status is resolved, proceed with login
        localStorage.setItem('user', JSON.stringify(this.userData.data));
        localStorage.setItem('token', this.userData.token);
        this.router.navigate(['/dashboard']);
      } else if (this.userData.data.status === 'pending' || this.userData.data.role === 'user')
      {
        alert("check your status");
      }
    } else {
      // Handle login failure (e.g., invalid username or password)
    }
  });
}
}