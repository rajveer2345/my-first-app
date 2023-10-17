import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  formData = { name: '', email: '', subject:'', message:''};
  userData: any[] = [];
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  onSubmit() {
     this.authService.submitInfo(this.formData).subscribe((res:any)=>{
   this.userData = res || [];
   console.log(this.userData["message"]);

  if(this.userData["message"]==="details sent successfully"){
    alert("enquiry added successfully");
    this.router.navigate(['/home'])
  }else{ 
      alert("OOPS Something went wrong");
  }
 })

}

}
