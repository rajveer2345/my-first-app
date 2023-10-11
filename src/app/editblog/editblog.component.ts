import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent {

  blogData = { image: '', category: '', title:'', desc:'' };
  
  userData: any[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  // Define a function to add a new blog
  // addNewBlog() {
  //   this.authService.createBlog(this.blogData).subscribe(
  //     (response) => {
  //       // Handle a successful API response here.
  //       console.log('Blog added successfully:', response);
  //     },
  //     (error) => {
  //       // Handle API error here.
  //       console.error('Error adding blog:', error);
  //     }
  //   );
  // }
  onSubmit() {
    //console.log(this.formData.password);
    this.authService.createBlog(this.blogData).subscribe((res:any)=>{
     this.userData = res || [];
     console.log(this.userData["message"]);
     console.log(this.userData["data"]);
     this.router.navigate(['/dashboard/blog'])
  
   })
 
 }
 
}
