import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css'] 
})
export class EditblogComponent {

  blogData = { image: '', category: '', title:'', desc:'' };
  
  userData: any[] = [];

  constructor(private authService: AuthService, private router: Router,private fireStorage:AngularFireStorage) {}
  title= 'imageupload';


  async onFileChange(event:any){
    const file=event.target.files[0]
    if (file){
      const path ='yt/${file.name}'
      const uploadTask = await this.fireStorage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL()
      console.log(url)
      console.log(file);
    }
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
  onSubmit() {
    //console.log(this.formData.password);
    this.authService.createBlog(this.blogData).subscribe((res:any)=>{
     this.userData = res || [];
     console.log(this.userData["message"]);

    if(this.userData["message"]=="blog added successfully"){

      alert("blog added successfully");
      this.router.navigate(['/dashboard/blog'])
    }else{ 

      alert("Something went wrong");
    }
   })
 
 }
 
}
