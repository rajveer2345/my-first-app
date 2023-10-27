import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";


@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.css']
})
export class AddtypeComponent {


  projTypeData = { type:'', userId:''};
  
  userData: any[] = [];

  constructor(private authService: AuthService, private router: Router,private routing :ActivatedRoute) {}

 

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

    console.log("hhhh")
      // const path = `yt/${this.file?.name}`
      // const uploadTask =await this.fireStorage.upload(path, this.file)
      // const url = await uploadTask.ref.getDownloadURL()
      // this.addTypeData.image = url;

       this.projTypeData.userId = JSON.parse(localStorage.getItem('user'))._id; 
      console.log("this is user id",this.projTypeData.userId);
      console.log("this is type",this.projTypeData.type);

     this.authService.createType(this.projTypeData).subscribe((res:any)=>{
     this.userData = res || [];
     console.log(this.userData["message"]);

    if(this.userData["message"]== "type added successfully"){

      alert("type added successfully");
      this.router.navigate(['/dashboard/projtype'])
    }else{ 

      alert("OOPs Something went wrong");
    }
   })
 
 }
 
}

