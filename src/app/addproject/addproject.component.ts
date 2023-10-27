import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {

 file: any;

  projectData = { image: '', type: '', title:'', desc:'' , url:'',userId:''};
  
  userData: any[] = [];

  typeData: any

  constructor(private authService: AuthService, private router: Router, private fireStorage:AngularFireStorage) {
    this.getMyType();
  }

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


      console.log(this.projectData);

     this.authService.createProject(this.projectData).subscribe((res:any)=>{
     this.userData = res || [];
     console.log(this.userData["message"]);

    if(this.userData["message"]==="project added successfully"){

      alert("project added successfully");
      this.router.navigate(['/dashboard/project'])
    }else{ 

      alert("OOPs Something went wrong");
    }
   })
 
 }

 getMyType(){

     this.authService.getAllProjType().subscribe((res:any)=>{
     this.typeData = res || [];
     console.log("gggg",this.typeData);

})

}

 
}

