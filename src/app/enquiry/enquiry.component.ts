import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {

  enquiryres: any;
  updatedData:any={};
  userData:any;
  enquiryListData:any[] = []
  id: any;
  title: any;
 
  constructor(private http: HttpClient, private authservice: AuthService, private router: Router) {}

  ngOnInit() {
    const userRole = JSON.parse(localStorage.getItem('user'));

    if (userRole.role!== 'admin') {
      // Redirect to another page or show an error message
      this.router.navigate(['/dashboard']);
    } else {
      this.fetchData();
    }
  }

  view(id:any){
    this.router.navigate(['/dashboard/viewenquiry'],{
      queryParams:{
        id:id
      }
    })}



fetchData() {

this.http.get('http://localhost:4000/contact/getall').subscribe(
  (data) => {

    console.log('API Response:', data);
    
    this.enquiryListData= data as any[];
  },
  (error) => {
   
    console.error('API Error:', error);
  }
);
}
}
