import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  id: any;
  contactData = { firstname: '', email: '', subject:'', phone:'' };
  
  userData: any[] = [];

  constructor(private authService: AuthService, private router: Router, private fireStorage:AngularFireStorage) {
    console.log(this.contactData)
  }
  
 
 onSubmit() {
    console.log(this.contactData)
      // const path = `xt/${this.file.name}`
      // const uploadTask =await this.fireStorage.upload(path, this.file)
      // const url = await uploadTask.ref.getDownloadURL()
      // this.projectData.image = url;
      // this.contactData.userId = JSON.parse(localStorage.getItem('user'))._id;
      // console.log("this is user id",this.contactData.userId);

     this.authService.addcontact(this.contactData).subscribe((res:any)=>{
     this.userData = res;
     console.log(this.userData["message"]);

    if(this.userData["message"]=="enquiry added successfully"){

      alert("Enquiry sent!");
      this.router.navigate(['/home'])
    }else{ 

      alert("OOPs Something went wrong");
    }
   })
 
 }
 
}
