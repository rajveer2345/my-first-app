import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  file: any;

  contactData = { name: '', email: '', message:'', subject:'' };
  
  userData: any[] = [];
  contactListData:any[] = []
  constructor(private authService: AuthService, private http: HttpClient ,private router: Router, private fireStorage:AngularFireStorage) {
   
    console.log(this.contactData);

  }

  //
  registerForm = new FormGroup({
    name: new FormControl("",[])
  })


  onFileChange(event:any){ 
    this.file = event.target.files[0];
  }

  
  onSubmit() {
      // const path = `yt/${this.file?.name}`
      // const uploadTask =await this.fireStorage.upload(path, this.file)
      // const url = await uploadTask.ref.getDownloadURL()
      // this.blogData.image = url;
      // this.blogData.userId = JSON.parse(localStorage.getItem('user'))._id; 
      // console.log("this is user id",this.blogData.userId);
      console.log(this.contactData);
     this.authService.createEnquiry(this.contactData).subscribe((res:any)=>{
     this.userData = res || [];
     console.log(this.userData["message"]);

    if(this.userData["message"]=="enquiry added successfully"){

      alert("enquiry added successfully");
      this.router.navigate(['/home'])
    }else{ 

      alert("OOPs Something went wrong");
    }
   })
 
 }
 

}
