import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";
@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent {
  file: any;
  projectData = { image: '', type: '', title:'', desc:'',  userId:'' ,url:''};
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
      const path = `yt/${this.file?.name}`
      const uploadTask =await this.fireStorage.upload(path, this.file)
      const url = await uploadTask.ref.getDownloadURL()
      this.projectData.image = url;
      this.projectData.userId = JSON.parse(localStorage.getItem('user'))._id; 
      console.log("this is user id",this.projectData.userId);

     this.authService.createProject(this.projectData).subscribe((res:any)=>{
     this.userData = res || [];
     console.log(this.userData["message"]);

    if(this.userData["message"]=="project added successfully"){
      alert("Project added successfully");
      this.router.navigate(['/dashboard/projects'])
    }else{ 
       alert("OOPS! Something went wrong");
    }
   })
 
 }
 
}
