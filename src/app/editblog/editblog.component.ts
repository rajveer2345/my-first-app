import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent {
  file: any;

  blogData = { image: '', category: '', title:'', desc:'',  userId:'' };
  
  userData: any[] = [];

  constructor(private authService: AuthService, private router: Router, private fireStorage:AngularFireStorage) {}

  onFileChange(event:any){ 
    this.file = event.target.files[0];
  }

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
  async onSubmit() {
      const path = `yt/${this.file.name}`
      const uploadTask =await this.fireStorage.upload(path, this.file)
      const url = await uploadTask.ref.getDownloadURL()
      this.blogData.image = url;
      this.blogData.userId = JSON.parse(localStorage.getItem('user'))._id; 
      console.log("this is user id",this.blogData.userId);

     this.authService.createBlog(this.blogData).subscribe((res:any)=>{
     this.userData = res || [];
     console.log(this.userData["message"]);

    if(this.userData["message"]=="blog added successfully"){

      alert("blog added successfully");
      this.router.navigate(['/dashboard/blog'])
    }else{ 

      alert("OOPs Something went wrong");
    }
   })
 
 }
 
}
