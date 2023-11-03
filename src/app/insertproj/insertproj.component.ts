import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Component({
  selector: 'app-insertproj',
  templateUrl: './insertproj.component.html',
  styleUrls: ['./insertproj.component.css']
})
export class InsertprojComponent {

  file: any;

  projectData = { image: '', projectTitle: '', desc:'', url:'',  userId:'' };
  
  userData: any[] = [];

  constructor(private authService: AuthService, private router: Router, private fireStorage:AngularFireStorage) {
    console.log(this.projectData)
  }

  onFileChange(event:any){ 
    this.file = event.target.files[0];
  }
 
 onSubmit() {
    console.log(this.projectData)
      // const path = `xt/${this.file.name}`
      // const uploadTask =await this.fireStorage.upload(path, this.file)
      // const url = await uploadTask.ref.getDownloadURL()
      // this.projectData.image = url;
      this.projectData.userId = JSON.parse(localStorage.getItem('user'))._id; 
      // console.log("this is user id",this.projectData.userId);

     this.authService.createProject(this.projectData).subscribe((res:any)=>{
     this.userData = res;
     console.log(this.userData["message"]);

    if(this.userData["message"]=="project added successfully"){

      alert("project added successfully");
      this.router.navigate(['/dashboard/project'])
    }else{ 

      alert("OOPs Something went wrong");
    }
   })
 
 }
 
}
