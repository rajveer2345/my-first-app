import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  formData = { email: '', password: '' };
  userData: any[] = [];

  constructor(private authservice: AuthService, private router: Router){}


  editBlog() {
     //console.log(this.formData.password);
     this.authservice.editblog(this.formData).subscribe((res:any)=>{
      this.userData = res || [];
      console.log(this.userData["message"]);
      // console.log(this.userData["data"]);
      // if (this.userData["message"] == "success") {
      //   // Redirect to another page using Angular Router
      //  // localStorage.setItem('user',this.userData['data']);
      //   this.router.navigate(['/dashboard']);
      //  // console.log(localStorage.getItem('user'));
      // }
    })
  
  }

  deleteBlog(bid:any) {
     //console.log(this.formData.password);
     this.authservice.deleteblog(bid).subscribe((res:any)=>{
      this.userData = res || [];
      console.log(this.userData["message"]);
      //console.log(this.userData["data"]);
      // if (this.userData["message"] == "success") {
      //   // Redirect to another page using Angular Router
      //  // localStorage.setItem('user',this.userData['data']);
      //   this.router.navigate(['/dashboard']);
      //  // console.log(localStorage.getItem('user'));
      // }
    })
  
  }


}
