import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-enquirydetail',
  templateUrl: './enquirydetail.component.html',
  styleUrls: ['./enquirydetail.component.css']
})
export class EnquirydetailComponent {
  viewEnquiry: any ={};
   
  constructor(private route: ActivatedRoute, private authService: AuthService , private router: Router  ) { }

  ngOnInit() {
   
    this.route.params.subscribe((params) => {
      const userId: String = params['id'];
      console.log(userId);
      
      
      if (userId) {
      this.authService.singleEnquiry(userId).subscribe(
        (data) => {
          
          this.viewEnquiry = data?.data;
          console.log(this.viewEnquiry);
        },
        (error) => {
          console.error('Error fetching user ', error);
        }
      );
      }
    });
  }

back(){
  this.router.navigate(["dashboard/enquiry"])
}

}
