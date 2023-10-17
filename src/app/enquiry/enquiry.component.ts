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
  enquiryRes: any;
  formData = { name: '', email: '', subject:'', message:''};
  userData:any[];
  enquiryListData:any[] = []
  id: any='651ffbe565d01d087be5854e';
 

  constructor(private http: HttpClient, private authService: AuthService, private router: Router){
    this.fetchData();
    
  }
  fetchData() {

    this.http.get('http://localhost:4000/enquiry/getall').subscribe(
      (data) => {
        console.log('API Response:', data);
        this.enquiryListData = data as any[];
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
    }
    vieww(id:any){
      this.router.navigate(['/dashboard/enquirydetail'],{
        queryParams:{
          id:id
        }
      })
    }
    
    
}
