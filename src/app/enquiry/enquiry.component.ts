import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  file: any;
  userData: any[] = [];
  contactListData:any[] = []
  userRole: string | undefined;

  constructor(private http: HttpClient ,private authService: AuthService, private router: Router, private fireStorage:AngularFireStorage) {

  }
  
  ngOnInit() {
const userRole =JSON.parse(localStorage.getItem('user'))
    console.log(this.userRole)
      if (userRole.role !== 'admin'){
          this.router.navigate(['/dashboard']);
      } else {
       this.fetchData();}
    }
  
  // onFileChange(event:any){ 
  //   this.file = event.target.files[0];
  // }

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

 fetchData() {

  this.http.get('http://localhost:4000/enquiry/getall').subscribe(
    (data) => {
      console.log("djlkfh");
      console.log('API Response:', data);
      
      this.contactListData = data as any[];
    },
    (error) => {
     
      console.error('API Error:', error);
    }
  );
  }


  vview(id:any){
    this.router.navigate(['/dashboard/projectdetail'],{
    queryParams:{
      id:id
    }
  })}

  sendEmail(address,subject,message,name) {
  
    this.authService.sendEmail(address, subject,message,name).subscribe(
      (response) => {
        // Handle success, e.g., show a confirmation message
        console.log(response);
      },
      (error) => {
        // Handle error, e.g., show an error message
      }
    );
  }
  

}
